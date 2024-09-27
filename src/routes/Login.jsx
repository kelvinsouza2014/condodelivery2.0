import TemporaryLinks from '../components/TemporaryLinks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Help from '../components/Help.jsx'
import Mark00 from '../components/Mark00.jsx';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/api/login', { // Link do Back-End
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem('token', data.token);
        alert('Login bem-sucedido!');
        navigate('/initial'); // Redireciona para a tela inicial após login
      } else {
        alert('Usuário ou senha incorretos!');
      }
    } catch (error) {
      console.error('Erro ao tentar logar:', error);
      alert('Erro ao comunicar com o servidor.');
    }
  };

  return (
    <>
      <TemporaryLinks />
      {/* <h1>Login</h1> */}
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
    </>
  )
}
export default Login;