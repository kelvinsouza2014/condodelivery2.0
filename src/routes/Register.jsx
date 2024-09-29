import TemporaryLinks from '../components/TemporaryLinks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Help from '../components/Help.jsx'
import Mark01 from '../components/Mark01.jsx';

function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

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
      const response = await fetch('http://localhost:5000/api/register', { // Link do Back-End
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        navigate('/login'); // Redireciona para a tela de login após o cadastro
      } else {
        alert('Erro no cadastro');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao comunicar com o servidor.');
    }
  };

  return (
    <div>
      <TemporaryLinks />
      <Help />
      <Mark01 />
      <div>
        <h2>Cadastro</h2>
        <form onSubmit={handleRegister}>
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
          <label>
            Confirmar Senha:
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </label>
          <br />
          <button type="submit">Cadastrar</button>
          <button onClick={() => navigate("/Login")}>Fazer login</button>
        </form>
    </div>
    </div>
  )
}
export default Register;