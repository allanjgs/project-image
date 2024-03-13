// Main.js

import React, { useState, useEffect } from 'react';
import Selection from './Selection';

const Main = ({ currentImage, isCustomizing, images }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);
  const [selectedFrames, setSelectedFrames] = useState({});
  const [selectedFrameNumber, setSelectedFrameNumber] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentImage]);

  const handleFrameClick = (frameNumber) => {
    if (isCustomizing) {
      setIsSelectionOpen(true);
      setSelectedFrameNumber(frameNumber); // Armazena o número do frame selecionado
    }
  };

  const handleSelectImage = (imageUrl) => {
    const updatedSelectedFrames = { ...selectedFrames, [selectedFrameNumber]: imageUrl };
    setSelectedFrames(updatedSelectedFrames);
    setIsSelectionOpen(false); // Fechar a caixa de seleção após selecionar a imagem
  };

  return (
    <div className='bg-dark h-screen w-full flex items-center justify-center relative'>
      <div className='bg-bg1 bg-no-repeat bg-contain w-[700px] h-[700px] relative'>
        <div className={`${isVisible ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}>
          {currentImage && <img src={currentImage} alt="" className='absolute bottom-0 items-center z-30' />}
        </div>
        {[1, 2, 3, 4, 5].map((frameNumber) => (
          <div
            key={frameNumber}
            id={`frame${frameNumber}`}
            className={`w-[108px] h-[108px] absolute z-50 cursor-pointer ${isCustomizing ? 'hover:bg-red-200' : ''}`}
            style={{ marginTop: frameNumber === 1 ? '107px' : frameNumber === 2 ? '25px' : frameNumber === 3 ? '25px' : frameNumber === 4 ? '148px' : '279px', marginLeft: frameNumber === 1 ? '16px' : frameNumber === 2 ? '229px' : frameNumber === 3 ? '463px' : frameNumber === 4 ? '155px' : '155px' }}
            onClick={() => handleFrameClick(frameNumber)}
          >
            {selectedFrames[frameNumber] && (
              <img src={selectedFrames[frameNumber]} alt="" className="w-full h-full object-cover" />
            )}
          </div>
        ))}
        {/* Renderiza o componente Selection se isCustomizing for true e a caixa de seleção estiver aberta */}
        <Selection isOpen={isCustomizing && isSelectionOpen} onSelectImage={handleSelectImage} />
      </div>
    </div>
  );
}

export default Main;
