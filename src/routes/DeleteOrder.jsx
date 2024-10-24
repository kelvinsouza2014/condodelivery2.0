import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tickets } from '../components/Tickets';
import { StyleComponentDeleteOrder } from '../css/StyleComponentDeleteOrder';

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
    <StyleComponentDeleteOrder>
    <section>
      <div>
        <p>Nome: {order.name}</p>
        <p>Código do pedido: {order.code}</p>
        <p>Bloco do condomínio: {order.block}</p>
        <p>Número do apartamento: {order.apartament}</p>
        <p>Nome da transportadora: {order.carrier}</p>
      </div>
      <div className="box-buttons-deleteorder">
        <button onClick={handleDelete}>Excluir Pedido</button>
        <button onClick={() => navigate("/Orders")}>Cancelar</button>
      </div>
    </section>
    </StyleComponentDeleteOrder>
  )
}
export default DeleteOrder;