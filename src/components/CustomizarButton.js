import React, { useState } from 'react';

const CustomizarButton = ({ onCustomizarClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCustomizarClick = () => {
    setIsSelected(!isSelected); // Inverte o estado de isSelected ao clicar no botão
    if (!isSelected) {
      onCustomizarClick(); // Chama a função passada como propriedade apenas se o botão estiver sendo selecionado
    }
  };

  return (
    <button 
      className={`rounded-lg bg-${isSelected ? 'red' : 'white'} text-${isSelected ? 'black' : 'accent'} text-xl text-center border w-36 hover:text-white hover:bg-accentHover`}
      onClick={handleCustomizarClick} // Chama a função de manipulação de clique personalizada
    >
      Customizar
    </button>
  );
}

export default CustomizarButton;
