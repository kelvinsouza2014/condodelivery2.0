import TemporaryLinks from '../components/TemporaryLinks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import Help from '../components/Help.jsx'
import Mark01 from '../components/Mark01.jsx';
import { StyleComponentRegister } from '../css/StyleComponentRegister.jsx';

function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // Chave secreta para criptografia
  const secretKey = 'your-secret-key';

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      // Limpa os campos
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      return;
    }

    // Dados do formulário de cadastro
    const userData = {
      email,
      password,
    };

    try {
      // Criptografar os dados antes de salvar no LocalStorage
      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(userData), secretKey).toString();
      
      localStorage.setItem('userData', encryptedData);

      alert('Cadastro realizado com sucesso! (Dados criptografados)');
      navigate('/Login'); // Redireciona para a tela de login após o cadastro

    } catch (error) {
      console.error('Erro ao armazenar os dados:', error);
      alert('Erro ao armazenar os dados.');
    }
  };

  return (
    <div>
      <TemporaryLinks />
      <Help />
      <Mark01 />
      <StyleComponentRegister>
      <div>
        <h2>Cadastro</h2>
        <form onSubmit={handleRegister}>
          <div className="box-register-form">
          <label>
            E-mail:
          </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br />
          <label>
            Senha:
          </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br />
          <label>
            Confirmar Senha:
          </label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <br />
          <button type="submit">Cadastrar</button>
          <button onClick={() => navigate("/Login")}>Fazer login</button>
          </div>
        </form>
      </div>
      </StyleComponentRegister>
    </div>
  )
}
export default Register;