import TemporaryLinks from '../components/TemporaryLinks';
import LogoutButton from '../components/LogoutButton';
import AppTitle from '../components/AppTitle';
import { Link } from 'react-router-dom';
import { Tickets } from '../components/Tickets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil as Edit} from '@fortawesome/free-solid-svg-icons';
import { faTrash as Delete} from '@fortawesome/free-solid-svg-icons';

const Orders = 

function Orders() {
  return (
    <div>
      <TemporaryLinks />
      <LogoutButton />
      <AppTitle />
      <section>
        <div>
         <Link to="/NewOrder">Novo Pedido</Link>
        </div>
        <div>
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
            <tbody>
              {Tickets.map((item,indice)=>(
                <tr key={indice}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.code}</td>
                  <td>{item.block}</td>
                  <td>{item.apartament}</td>
                  <td>{item.carrier}</td>
                  <td>
                    <Link to={`/EditOrder/${item.id}`}>
                    <FontAwesomeIcon icon={Edit} />
                    </Link>
                    |
                    <Link to={`/DeleteOrder/${item.id}`}>
                    <FontAwesomeIcon icon={Delete} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
export default Orders;