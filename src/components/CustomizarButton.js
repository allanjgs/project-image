import React, { useState } from 'react';

const CustomizarButton = ({ onCustomizarClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCustomizarClick = () => {
    setIsSelected(!isSelected);
    if (!isSelected) {
      onCustomizarClick();
    }
  };

  return (
    <button 
      className={`rounded-lg bg-${isSelected ? 'red' : 'white'} text-${isSelected ? 'black' : 'accent'} text-xl text-center border w-36 hover:text-white hover:bg-accentHover`}
      onClick={handleCustomizarClick}
    >
      Customizar
    </button>
  );
}

export default CustomizarButton;
