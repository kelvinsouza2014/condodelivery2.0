import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion as Question } from '@fortawesome/free-solid-svg-icons';

function Help() {
  return (
    <>
      <FontAwesomeIcon icon={Question} />
      <a href="#">Ajuda</a>
    </>
  )
}
export default Help;