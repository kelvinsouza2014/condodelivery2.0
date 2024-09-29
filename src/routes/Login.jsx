import TemporaryLinks from '../components/TemporaryLinks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import Help from '../components/Help.jsx'
import Mark00 from '../components/Mark00.jsx';

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
      <section>
        <form onSubmit={handleLogin}>
          <label>
            E-mail:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <br />
          <label>
            Senha:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <br />
          <button type="submit">Entrar</button>
        </form>
        <div>
          <button onClick={() => navigate("/Register")}>
            Cadastre-se
          </button>
        </div>
    </section>
    </div>
  )
}
export default Login;