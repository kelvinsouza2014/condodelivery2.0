import TemporaryLinks from '../components/TemporaryLinks';
import { useNavigate } from 'react-router-dom';
import Help from '../components/Help.jsx'
import Mark00 from '../components/Mark00.jsx';
import Credits from '../components/Credits.jsx';

function Initial() {
  
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello</h1>
      <TemporaryLinks />
      <Help />
      <Mark00 />
      <div>
        <p>A sua entrega rápida, cômoda e segura!</p>
      </div>
      <div>
      <button onClick={() => navigate("/Login")}>Fazer login</button>
      </div>
      <Credits />
    </div>
  )
}

export default Initial
