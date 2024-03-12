import React, { useState } from 'react';
import Main from './Main';
import Menu from './Menu';
import lapImages from './images';

const nullImage = null;

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allImages = [nullImage, ...lapImages];

  const handleEvoluirClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  return (
    <>
      <Menu setCurrentImageIndex={setCurrentImageIndex} currentImageIndex={currentImageIndex} images={allImages} />
      <Main currentImage={allImages[currentImageIndex]} />
    </>
  );
}

export default App;
