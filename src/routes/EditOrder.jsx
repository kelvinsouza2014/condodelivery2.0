import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tickets } from '../components/Tickets';

function EditOrder() {

  const navigate = useNavigate();
  const {id} = useParams();

  const retrieveOrder = Tickets.filter((item)=> item.id == id); // Retrieve Order = Recuperar pedido

  const [order, setOrder] = useState ({
    id:retrieveOrder[0].id,
    name:retrieveOrder[0].name,
    code:retrieveOrder[0].code,
    block:retrieveOrder[0].block,
    apartament:retrieveOrder[0].apartament,
    carrier:retrieveOrder[0].carrier,
});

 // Atualiza o estado com os valores dos inputs
 const handleChange = (e)=>{
  const {name, value} =e.target;
  setOrder({...order, [name]:value});
}

const handleSubmit =(e)=>{
  e.preventDefault(); // Previne recarregamento da página
  let indice;
  Tickets.forEach((item, index)=>{
    if(item.id == order.id) {
      indice = index;
    }
  });
  Tickets.splice(indice,1,order);
  navigate('/Orders')
}

  return (
    <section>
        <form onSubmit={handleSubmit}>
          <p>
            <label>
              Nome:
                <input 
                type="text" 
                name="name" 
                id="idName" 
                value={order.name} 
                placeholder='Ex.: Amanda Nunes' 
                onChange={handleChange}
                required
                />
            </label>
          </p>
          <p>
            <label>
              Código do pedido:
                <input 
                type="number" 
                name="code" 
                id="idCode" 
                value={order.code} 
                placeholder='Ex.: 123456' 
                onChange={handleChange}
                required
                />
            </label>
          </p>
          <p>
            <label>
              Bloco do condomínio:
                <input 
                type="text" 
                name="block" 
                id="idBlock" 
                value={order.block} 
                placeholder='Ex.: A' 
                onChange={handleChange}
                required
                />
            </label>
          </p>
          <p>
            <label>
              Número do apartamento:
                <input 
                type="number" 
                name="apartament" 
                id="idApartament" 
                value={order.apartament} 
                placeholder='Ex.: 123' 
                onChange={handleChange}
                required
                />
            </label>
          </p>
          <p>
            <label>
              Nome da transportadora:
                <input 
                type="text" 
                name="carrier" 
                id="idCarrier" 
                value={order.carrier} 
                placeholder='Ex.: Ifood' 
                onChange={handleChange}
                required
                />
            </label>
          </p>
          <div>
            <button type="submit">Editar</button>
            <button onClick={() => navigate("/Orders")}>Cancelar Pedido</button>
          </div>
        </form>
      </section>
  )
}
export default EditOrder;