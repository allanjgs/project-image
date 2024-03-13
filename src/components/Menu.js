// Menu.js

import React from 'react';
import Evoluir from './Evoluir';
import CustomizarButton from './Customizar';

const Menu = ({ setCurrentImageIndex, currentImageIndex, images, onCustomizarClick, isCustomizing, setIsCustomizing }) => {
  return (
    <div className='flex bg-transparent w-full justify-center mt-4  z-50 fixed '>
      <div className='flex flex-row gap-x-4'>
        <Evoluir setCurrentImageIndex={setCurrentImageIndex} currentImageIndex={currentImageIndex} images={images} />
        <CustomizarButton onCustomizarClick={onCustomizarClick} isCustomizing={isCustomizing} setIsCustomizing={setIsCustomizing} />
      </div>
    </div>
  );
}

export default Menu;
