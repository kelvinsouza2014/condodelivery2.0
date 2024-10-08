import TemporaryLinks from '../components/TemporaryLinks';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Help from '../components/Help.jsx'
import Mark01 from '../components/Mark01.jsx';
import Credits from '../components/Credits.jsx';
import { StyleComponentMark01 } from '../css/StyleComponentMark01';
import { StyleComponentAuthentication } from '../css/StyleComponentAuthentication';

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
    <StyleComponentAuthentication>
    <div>
      <TemporaryLinks />
      <Help />
      <Mark01 />
      <section>
        <StyleComponentMark01>
        <div>
          <p>Insira o código de 6 dígitos que enviamos para o seu numero que termina em 6789, para concluir a configuração de autenticação de dois fatores.
          </p>
        </div>
        </StyleComponentMark01>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            maxLength={6} // Limitar a entrada a 6 caracteres
            placeholder="Digite o código"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            />
          <button className="submit-button-authentication" type="submit">Avançar</button>
        </form>
      </section>
      <Credits />
      <div>
        <button className="token-button-authentication" onClick={() => alert("O token de autenticação é: 123456")}>Token</button>
      </div>
    </div>
    </StyleComponentAuthentication>
  )
}
export default Authentication;