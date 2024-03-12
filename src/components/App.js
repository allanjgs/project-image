// App.js

import React, { useState } from 'react';
import Main from './Main';
import Menu from './Menu';
import lapImages from './images';

const nullImage = null;

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allImages = [nullImage, ...lapImages];

  const handleCustomizarClick = () => {
    // Implemente a lógica de customização aqui, se necessário
    console.log("Botão Customizar clicado!");
  };

  return (
    <>
      <Menu 
        setCurrentImageIndex={setCurrentImageIndex} 
        currentImageIndex={currentImageIndex} 
        images={allImages} 
        onCustomizarClick={handleCustomizarClick} // Passa a função handleCustomizarClick como propriedade
      />
      <Main currentImage={allImages[currentImageIndex]} />
    </>
  );
}

export default App;
