import React from 'react';
import { useParams } from 'react-router-dom';


function FullPizza() {
  const { id } = useParams();

  return (
  <div className='container'>
    <img src='' />
    <h2>{id}</h2>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    <h4>250 грн</h4>
  </div>
  )
}

export default FullPizza;
