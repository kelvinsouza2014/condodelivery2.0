import TemporaryLinks from '../components/TemporaryLinks';
import AppTitle from '../components/AppTitle';
import { useState } from 'react';
import { Tickets } from '../components/Tickets';
import { useNavigate } from 'react-router-dom';

function NewOrder() {

  const navigate = useNavigate();

  // Gerador de novo ID
  let newId = Tickets[Tickets.length -1].id +1;

  const [order, setOrder]=useState({
    id: newId,
    name: '',
    code: '',
    block: '',
    apartament: '',
    carrier: '',
  });

  // Atualiza o estado com os valores dos inputs
  const handleChange = (e)=>{
    e.preventDefault();
    const {name, value} =e.target;
    setOrder({...order, [name]:value});
  }

  const handleSubmit =(e)=>{
    e.preventDefault(); // Previne recarregamento da página
    Tickets.push (order); // Adiciona o novo pedido ao array
    navigate('/Orders')
  }

  return (
    <>
      <TemporaryLinks />
      <AppTitle />
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
            <button type="submit">Novo Pedido</button>
            <button onClick={() => navigate("/Orders")}>Cancelar Pedido</button>
          </div>
        </form>
      </section>
    </>
  )
}
export default NewOrder;