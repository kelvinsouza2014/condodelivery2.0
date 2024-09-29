import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion as Question } from '@fortawesome/free-solid-svg-icons';

function Help() {
  return (
    <div>
      <a href="#">
      <FontAwesomeIcon icon={Question} /> Ajuda
      </a>
    </div>
  )
}
export default Help;