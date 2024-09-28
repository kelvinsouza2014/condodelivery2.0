import TemporaryLinks from '../components/TemporaryLinks';
import { useNavigate } from 'react-router-dom';
import Help from '../components/Help.jsx'
import Mark00 from '../components/Mark00.jsx';
import Credits from '../components/Credits.jsx';

function Initial() {
  
  const navigate = useNavigate();

  return (
    <>
      <TemporaryLinks />
      {/* <h1>Inicial</h1> */}
      <Help />
      <Mark00 />
      <div>
        <p>A sua entrega rápida, cômoda e segura!</p>
      </div>
      <div>
      <button onClick={() => navigate("/Login")}>Fazer login</button>
      </div>
      <Credits />
    </>
  )
}

export default Initial
