// Menu.js
import React from 'react';
import Evoluir from './Evoluir';
import CustomizarButton from './Customizar';

const Menu = ({ setCurrentImageIndex, currentImageIndex, images, onCustomizarClick, isCustomizing, setIsCustomizing }) => {
  return (
    <div className='flex gap-x-4 m-2 container'>
      <div>
        <Evoluir setCurrentImageIndex={setCurrentImageIndex} currentImageIndex={currentImageIndex} images={images} />
      </div>
      <div>
        <CustomizarButton onCustomizarClick={onCustomizarClick} isCustomizing={isCustomizing} setIsCustomizing={setIsCustomizing} /> {/* Passando isCustomizing e setIsCustomizing para o componente CustomizarButton */}
      </div>
    </div>
  );
}

export default Menu;
