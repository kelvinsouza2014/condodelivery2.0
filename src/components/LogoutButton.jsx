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
    <>
      <button onClick={handleLogout}>
        Encerrar sessão
      </button>
    </>
  )
}
export default LogoutButton;