import TemporaryLinks from '../components/TemporaryLinks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import Help from '../components/Help.jsx'
import Mark00 from '../components/Mark00.jsx';
import { StyleComponentLogin } from '../css/StyleComponentLogin.jsx';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const secretKey = 'your-secret-key';

  const handleLogin = async (e) => {
    e.preventDefault();

// Obter os dados criptografados
const encryptedData = localStorage.getItem('userData');
if (!encryptedData) {
  alert('Usuário não encontrado!');
  return;
}

try {
  // Descriptografar os dados do usuário
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  // Verificar se as credenciais estão corretas
  if (decryptedData.email === email && decryptedData.password === password) {
    // Gerar token de sessão
    const token = 
      Math.random().toString(16).substring(2) + 
      Math.random().toString(16).substring(2);

    sessionStorage.setItem('token', token);

    alert('Login bem-sucedido!');
    navigate('/Authentication'); // Redireciona para a tela de autenticação
  } else {
    alert('Usuário ou senha incorretos!');
  }

} catch (error) {
  console.error('Erro ao tentar logar:', error);
  alert('Erro ao tentar logar.');
}
  };

  return (
    <div>
      <TemporaryLinks />
      <Help />
      <Mark00 />
      <StyleComponentLogin>
      <section>
        <form onSubmit={handleLogin}>
          <label>
            E-mail:<br />
            <input placeholder="Entre com o seu e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <br />
          <label>
            Senha:<br />
            <input placeholder="Digite sua senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <br />
          <button className="submit-button-login" type="submit">Entrar</button>
        </form>
        <div>
          <button className="submit-button-register" onClick={() => navigate("/Register")}>
            Cadastre-se
          </button>
        </div>
    </section>
    </StyleComponentLogin>
    </div>
  )
}
export default Login;