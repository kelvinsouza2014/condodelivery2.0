import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remover token do localStorage
    localStorage.removeItem('authToken');

    // Redirecionar para a página de login
    navigate('/Login');
  }

  return (
    <div>
      <button onClick={handleLogout}>
        Encerrar sessão
      </button>
    </div>
  )
}
export default LogoutButton;