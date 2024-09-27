import TemporaryLinks from '../components/TemporaryLinks';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Help from '../components/Help.jsx'
import Mark01 from '../components/Mark01.jsx';
import Credits from '../components/Credits.jsx';

function Authentication() {
  
  const [token, setToken] = useState(""); // Estado para armazenar o código inserido
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = (e) => {
    e.preventDefault();

    // Código pré-definido
    const trueToken = "123456";
    // Validação do código
    if (token === trueToken) {
      alert("Código correto! Você será redirecionado.");
      navigate("/Orders"); // Redireciona para a próxima tela
    } else {
      alert("Código incorreto. Tente novamente.");
      setToken(""); // Limpa o campo se o código estiver incorreto
    }
  };

  return (
    <>
    <TemporaryLinks />
      {/* <h1>Autenticação</h1> */}
      <Help />
      <Mark01 />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          maxLength={6} // Limitar a entrada a 6 caracteres
          placeholder="Digite o código"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button type="submit">Avançar</button>
      </form>
      <Credits />
    </>
  )
}
export default Authentication;