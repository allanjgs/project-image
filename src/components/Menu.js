import React from 'react';

const Menu = ({ onEvoluirClick }) => { // Recebe a função onEvoluirClick como propriedade
  return (
    <div className='flex gap-x-4 m-2 container'>
      <div>
        <button 
          className='rounded-lg bg-white text-accent text-xl text-center border w-36 hover:text-white hover:bg-accentHover'
          onClick={onEvoluirClick} // Chama a função onEvoluirClick quando o botão é clicado
        >
          Evoluir
        </button>
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
