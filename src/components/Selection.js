// Selection.js

import React from 'react';
import SelectionItem from './SelectionItem';
import { FcCancel } from 'react-icons/fc';

function importAll(r) {
  return r.keys().map(r);
}

const Selection = ({ isOpen, onSelectImage, onClearFrame, selectedFrameNumber }) => {
  if (!isOpen) return null;

  // Importe as imagens apenas quando necessário
  const frameImages = importAll(require.context('../assets/frame', false, /\.(png)$/));

  const handleCancelClick = () => {
    // Limpar o frame selecionado
    onClearFrame(selectedFrameNumber);
  };

  return (
    <div className="bg-white border border-gray-300 p-4 h-300 overflow-y-auto flex flex-row gap-x-2 fixed top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 items-center">
      {frameImages.map((imageUrl, index) => (
        <SelectionItem key={index} imageUrl={imageUrl} onSelectImage={onSelectImage} />
      ))}
      <FcCancel className="text-red-500 mt-2 cursor-pointer" size={42} onClick={handleCancelClick} />
    </div>
  );
}

export default Selection;