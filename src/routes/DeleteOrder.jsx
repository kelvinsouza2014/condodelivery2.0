import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tickets } from '../components/Tickets';

function DeleteOrder() {

  const navigate = useNavigate();
  const {id} = useParams();

  const retrieveOrder = Tickets.filter((item)=> item.id == id); // Retrieve Order = Recuperar pedido

  const [order] = useState ({
    id:retrieveOrder[0].id,
    name:retrieveOrder[0].name,
    code:retrieveOrder[0].code,
    block:retrieveOrder[0].block,
    apartament:retrieveOrder[0].apartament,
    carrier:retrieveOrder[0].carrier,
});

const handleDelete =(e)=>{
  e.preventDefault(); // Previne recarregamento da página
  let indice;
  Tickets.forEach((item, index)=>{
    if(item.id == order.id) {
      indice = index;
    }
  });
  Tickets.splice(indice, 1);
  navigate('/Orders')
}

  return (
    <section>
      <div>
        <p>Nome {order.name}</p>
        <p>Code {order.code}</p>
        <p>Block {order.block}</p>
        <p>Apartament {order.apartament}</p>
        <p>Carrier {order.carrier}</p>
      </div>
      <div>
        <button onClick={handleDelete}>Excluir</button>
        <button onClick={() => navigate("/Orders")}>Cancelar Pedido</button>
      </div>
    </section>
  )
}
export default DeleteOrder;