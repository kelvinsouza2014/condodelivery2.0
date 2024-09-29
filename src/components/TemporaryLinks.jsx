// Link (Desenvolvimento)
import { Link } from 'react-router-dom';
// Link (Desenvolvimento)

function TemporaryLinks() {
  return (
    <div>
      <h1>Links Temporários</h1>
      
      {/* Links temporários (Desenvolvimento) */}
      <Link to="/">Initial</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Register">Register</Link>
      <Link to="/Authentication">Authentication</Link>
      <Link to="/Orders">Orders</Link>
      <Link to="/NewOrder">NewOrder</Link>
      {/* Links temporários (Desenvolvimento) */}
    </div>
  )
}
export default TemporaryLinks;