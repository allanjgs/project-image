import React from 'react';

const Customizar = ({ isCustomizing, setIsCustomizing }) => {
  const handleCustomizarClick = () => {
    setIsCustomizing(!isCustomizing);
    console.log("Botão Customizar clicado!");
  };

  return (
    <button 
      className={`rounded-lg ${isCustomizing ? 'bg-red-700 text-white font-bold' : 'bg-white text-accent'} text-xl text-center w-36 hover:text-white hover:bg-accentHover`}
      onClick={handleCustomizarClick}
    >
      Customizar
    </button>
  );
}

export default Customizar;
