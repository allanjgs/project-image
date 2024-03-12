// Customizar.js

import React from 'react';

const CustomizarButton = ({ onCustomizarClick }) => {
  const handleCustomizarClick = () => {
    // Implemente a lógica de customização aqui, se necessário
    console.log("Botão Customizar clicado!");
    onCustomizarClick(); // Chama a função passada como propriedade quando o botão é clicado
  };

  return (
    <button 
      className='rounded-lg bg-white text-accent text-xl text-center border w-36 hover:text-white hover:bg-accentHover'
      onClick={handleCustomizarClick} // Chama a função de manipulação de clique personalizada
    >
      Customizar
    </button>
  );
}

export default CustomizarButton;
