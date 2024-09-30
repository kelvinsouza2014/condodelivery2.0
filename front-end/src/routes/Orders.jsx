import TemporaryLinks from '../components/TemporaryLinks';
import LogoutButton from '../components/LogoutButton';
import AppTitle from '../components/AppTitle';
import { Link } from 'react-router-dom';
import { Tickets } from '../components/Tickets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil as Edit} from '@fortawesome/free-solid-svg-icons';
import { faTrash as Delete} from '@fortawesome/free-solid-svg-icons';
import { StyleComponentButtonSecondary } from '../css/StyleComponentButtonSecondary';
import { StyleComponentOrderBlock } from '../css/StyleComponentOrderBlock';

const Orders = 

function Orders() {
  return (
    <div>
    <StyleComponentButtonSecondary>
      <StyleComponentOrderBlock>
      <TemporaryLinks />
      <LogoutButton />
      <AppTitle />
      <section>
        <div className="box-button-secondary">
         <Link to="/NewOrder" className="button-secondary">Novo Pedido</Link>
        </div>
        <div className="box-order-block">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Códgio</th>
                <th>Bloco</th>
                <th>Apartamento</th>
                <th>Transportadora</th>
              </tr>
            </thead>
            <tbody className="OrderBlock">
              {Tickets.map((item,indice)=>(
                <tr key={indice}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.code}</td>
                  <td>{item.block}</td>
                  <td>{item.apartament}</td>
                  <td>{item.carrier}</td>
                  <td>
                    <Link to={`/EditOrder/${item.id}`} className="order-block-icons">
                    <FontAwesomeIcon icon={Edit} />
                    </Link>
                    
                    <Link to={`/DeleteOrder/${item.id}`} className="order-block-icons">
                    <FontAwesomeIcon icon={Delete} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      </StyleComponentOrderBlock>
    </StyleComponentButtonSecondary>
    </div>
  )
}
export default Orders;