// Evoluir.js

import React from 'react';

const handleEvoluirClick = (setCurrentImageIndex, currentImageIndex, images) => {
  setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
};

const EvoluirButton = ({ onEvoluirClick }) => {
  return (
    <button 
      className='rounded-lg bg-white text-accent text-xl text-center border w-36 hover:text-white hover:bg-accentHover'
      onClick={onEvoluirClick}
    >
      Evoluir
    </button>
  );
}

const Evoluir = ({ setCurrentImageIndex, currentImageIndex, images }) => {
  const onEvoluirClick = () => {
    handleEvoluirClick(setCurrentImageIndex, currentImageIndex, images);
  };

  return (
    <div>
      <EvoluirButton onEvoluirClick={onEvoluirClick} />
    </div>
  );
}

export default Evoluir;
