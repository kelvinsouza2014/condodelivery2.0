import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion as Question } from '@fortawesome/free-solid-svg-icons';
import { StyleComponentHelp } from '../css/StyleComponentHelp';


function Help() {
  return (
    <StyleComponentHelp>
    <div>
      <a href="#">
      <FontAwesomeIcon icon={Question} /> Ajuda
      </a>
    </div>
    </StyleComponentHelp>
  )
}
export default Help;