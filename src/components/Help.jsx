import {} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

function Help() {
  return (
    <>
      <FontAwesomeIcon icon={faCircleQuestion} />
      <a href="#">Ajuda</a>
    </>
  )
}
export default Help;