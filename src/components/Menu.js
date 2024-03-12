// Menu.js

import React from 'react';
import Evoluir from './Evoluir'; // Importa o componente agrupado Evoluir

const Menu = ({ setCurrentImageIndex, currentImageIndex, images }) => {
  return (
    <div className='flex gap-x-4 m-2 container'>
      <div>
        <Evoluir setCurrentImageIndex={setCurrentImageIndex} currentImageIndex={currentImageIndex} images={images} />
      </div>
      <div>
        <button 
          className='rounded-lg bg-white text-accent text-xl text-center border w-36 hover:text-white hover:bg-accentHover'
        >
          Customização
        </button>
      </div>
    </div>
  );
}

export default Menu;
