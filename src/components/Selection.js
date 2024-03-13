import React from 'react';
import SelectionItem from './SelectionItem';

function importAll(r) {
  return r.keys().map(r);
}

const Selection = ({ isOpen, onSelectImage }) => {
  if (!isOpen) return null;

  // Importe as imagens apenas quando necessário
  const frameImages = importAll(require.context('../assets/frame', false, /\.(png)$/));

  return (
    <div className="bg-white border border-gray-300 p-4 h-300 overflow-y-auto flex flex-row gap-x-2 fixed bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      {frameImages.map((imageUrl, index) => (
        <SelectionItem key={index} imageUrl={imageUrl} onSelectImage={onSelectImage} />
      ))}
    </div>
  );
}

export default Selection;