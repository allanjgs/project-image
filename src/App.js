// App.js

import React, { useState } from 'react';
import Image1 from './assets/Imagem1.png';
import Image2 from './assets/Imagem2.png';
import Image3 from './assets/Imagem3.png';
import Main from './components/Main';
import Menu from './components/Menu';

const nullImage = null; // Novo estado para representar a ausência de imagem

const App = () => {
  const images = [nullImage, Image1, Image2, Image3]; // Adiciona o novo estado ao array de imagens
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Define o estado inicial como 0 para começar sem imagem

  const handleEvoluirClick = () => {
    // Incrementa o índice da imagem atual, retorna ao primeiro índice se chegar ao final do array
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <Menu setCurrentImageIndex={setCurrentImageIndex} currentImageIndex={currentImageIndex} images={images} />
      <Main currentImage={images[currentImageIndex]} />
    </>
  );
}

export default App;
