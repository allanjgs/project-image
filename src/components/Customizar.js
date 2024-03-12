import React from 'react';

const Customizar = ({ isCustomizing, setIsCustomizing }) => {
  const handleCustomizarClick = () => {
    setIsCustomizing(!isCustomizing); // Inverte o estado de isCustomizing ao clicar no botão
    console.log("Botão Customizar clicado!");
  };

  return (
    <button 
      className={`rounded-lg bg-${isCustomizing ? 'red' : 'white'} text-${isCustomizing ? 'white' : 'accent'} text-xl text-center border w-36 hover:text-white hover:bg-accentHover`}
      onClick={handleCustomizarClick} // Chama a função de manipulação de clique personalizada
    >
      Customizar
    </button>
  );
}

export default Customizar;
 