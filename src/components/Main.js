import React, { useState, useEffect } from 'react';
import Selection from './Selection';
import frames from './frame';


const Main = ({ currentImage, isCustomizing }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentImage]);

  const handleFrameClick = () => {
    if (isCustomizing) {
      setIsSelectionOpen(!isSelectionOpen);
    }
  };

  return (
    <div className='bg-dark h-screen w-full flex items-center justify-center'>
      <div className='bg-bg1 bg-no-repeat bg-contain w-[700px] h-[700px] relative'>
        <div className={`${isVisible ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}>
          {currentImage && <img src={currentImage} alt="" className='absolute bottom-0 items-center z-30' />}
        </div>
        <div
          id='frame1'
          className={`w-[108px] h-[108px] absolute mt-[107px] ml-4 bg-pink-50  z-50 ${isCustomizing ? 'hover:bg-red-200 cursor-pointer' : ''}`}
          onClick={handleFrameClick}
        ></div>
        <Selection isOpen={isCustomizing && isSelectionOpen} frames={frames} /> {/* Passe os frames para o componente Selection */}
        



        <div
          id='frame2'
          className={`w-[108px] h-[108px] absolute mt-[25px] ml-[229px] bg-green-50 ${isCustomizing ? 'hover:bg-red-200 cursor-pointer' : ''}`}
          onClick={() => {
            console.log("Frame 2 clicado");
            handleFrameClick(2);
          }}
        ></div>
        <div
          id='frame3'
          className={`w-[108px] h-[108px] absolute mt-[25px] ml-[463px] bg-red-50 ${isCustomizing ? 'hover:bg-red-200 cursor-pointer' : ''}`}
          onClick={() => {
            console.log("Frame 3 clicado");
            handleFrameClick(3);
          }}
        ></div>
        <div
          id='frame4'
          className={`w-[108px] h-[108px] absolute mt-[148px] ml-[155px] bg-blue-50 ${isCustomizing ? 'hover:bg-red-200 cursor-pointer' : ''}`}
          onClick={() => {
            console.log("Frame 4 clicado");
            handleFrameClick(4);
          }}
        ></div>
        <div
          id='frame5'
          className={`w-[108px] h-[108px] absolute mt-[279px] ml-[155px] bg-orange-50 ${isCustomizing ? 'hover:bg-red-200 cursor-pointer' : ''}`}
          onClick={() => {
            console.log("Frame 5 clicado");
            handleFrameClick(5);
          }}
        ></div>
      </div>
    </div>
  );
}

export default Main;
