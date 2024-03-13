import React, { useState } from 'react';
import Main from './Main';
import Menu from './Menu';
import lapImages from './images';
import frames from './frame';

const nullImage = null;
const allImages = [nullImage, ...lapImages]; 
const allFrames = frames;

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCustomizing, setIsCustomizing] = useState(false); 

  const handleCustomizarClick = () => {
    setIsCustomizing(true); 
  };

  return (
    <>
      <Menu 
        setCurrentImageIndex={setCurrentImageIndex} 
        currentImageIndex={currentImageIndex} 
        images={allImages} 
        onCustomizarClick={handleCustomizarClick} 
        isCustomizing={isCustomizing} 
        setIsCustomizing={setIsCustomizing} 
      />
      <Main currentImage={allImages[currentImageIndex]} isCustomizing={isCustomizing} frames={allFrames} /> 
    </>
  );
}

export default App;
