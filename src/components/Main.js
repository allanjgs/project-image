import React, { useState, useEffect } from 'react';

const Main = ({ currentImage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Define a visibilidade para true após um pequeno atraso para iniciar a transição
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout); // Limpa o timeout ao desmontar o componente
  }, [currentImage]); // Executa o efeito sempre que a imagem atual mudar

  return (
    <div className='bg-dark h-screen w-full flex items-center justify-center'>
      <div className='bg-bg1 bg-no-repeat bg-contain w-[700px] h-[700px] relative'>
        <div className={`${isVisible ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}>
          {currentImage && <img src={currentImage} alt="" className='absolute bottom-0 items-center' />}
          {/* Renderiza a imagem atual se existir */}
        </div>
        <div
          id='frame1'
          className='w-[108px] h-[108px] absolute mt-[107px] ml-4 bg-pink-50'
        ></div>
        <div
          id='frame2'
          className='w-[108px] h-[108px] absolute mt-[25px] ml-[229px] bg-green-50'
        ></div>
        <div
          id='frame3'
          className='w-[108px] h-[108px] absolute mt-[25px] ml-[463px] bg-red-50'
        ></div>
        <div
          id='frame4'
          className='w-[108px] h-[108px] absolute mt-[148px] ml-[155px] bg-blue-50'
        ></div>
        <div
          id='frame5'
          className='w-[108px] h-[108px] absolute mt-[279px] ml-[155px] bg-orange-50'
        ></div>
      </div>
    </div>
  );
}

export default Main;
