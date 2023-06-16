import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState(); 
  const { id } = useParams();
  const navigate = useNavigate();


  React.useEffect(() => {
    async function fetchPizza(){
      try {
        const { data } = await axios.get('https://644fe2f3ba9f39c6ab6f03fb.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы!');
        navigate('/');
      }
    }
    fetchPizza();
  },[])  

  if(!pizza){
    return 'Загрузка...';
  }

  return (
  <div className='container'>
    <img src={pizza.imageUrl} />
    <h2>{pizza.title}</h2>
    <h4>{ pizza.price } грн</h4>
  </div>
  )
}

export default FullPizza;
