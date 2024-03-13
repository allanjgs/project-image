import React from 'react';

const Customizar = ({ isCustomizing, setIsCustomizing }) => {
  const handleCustomizarClick = () => {
    setIsCustomizing(!isCustomizing);
    console.log("Botão Customizar clicado!");
  };

  return (
    <button 
      className={`rounded-lg bg-${isCustomizing ? 'red' : 'white'} text-${isCustomizing ? 'white' : 'accent'} text-xl text-center border w-36 hover:text-white hover:bg-accentHover`}
      onClick={handleCustomizarClick}
    >
      Customizar
    </button>
  );
}

export default Customizar;
 