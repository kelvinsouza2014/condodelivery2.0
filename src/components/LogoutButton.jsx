import { useNavigate } from 'react-router-dom';
import { StyleComponentButtonLogout } from '../css/StyleComponentButtonLogout'

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remover token
    sessionStorage.removeItem('token');

    // Redirecionar para a página de login
    navigate('/Login');
  }

  return (
    <StyleComponentButtonLogout>
    <div>
      <button onClick={handleLogout}>
        Encerrar sessão
      </button>
    </div>
    </StyleComponentButtonLogout>
  )
}
export default LogoutButton;