import TemporaryLinks from '../components/TemporaryLinks';
import { useNavigate } from 'react-router-dom';
import Help from '../components/Help.jsx'
import Mark00 from '../components/Mark00.jsx';
import Credits from '../components/Credits.jsx';
import { StyleComponentMark00 } from '../css/StyleComponentMark00.jsx';
import { StyleComponentButtonDefault } from '../css/StyleComponentButtonDefault.jsx';

function Initial() {
  
  const navigate = useNavigate();

  return (
    <div>
      <TemporaryLinks />
      <Help />
      <Mark00 />
      <StyleComponentMark00>
      <div>
        <p>A sua entrega rápida, <br/>cômoda e segura!</p>
      </div>
      </StyleComponentMark00>
      <StyleComponentButtonDefault>
      <div>
      <button onClick={() => navigate("/Login")}>Fazer login</button>
      </div>
      </StyleComponentButtonDefault>
      <Credits />
    </div>
  )
}

export default Initial
