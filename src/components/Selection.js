// Selection.js

import React from 'react';
import SelectionItem from './SelectionItem';

function importAll(r) {
  return r.keys().map(r);
}

const Selection = ({ isOpen }) => {
  if (!isOpen) return null;

  // Importe as imagens apenas quando necessário
  const frameImages = importAll(require.context('../assets/frame', false, /\.(png)$/));

  return (
    <div className="bg-white border border-gray-300 p-4 h-300 overflow-y-auto flex flex-row"
         style={{ position: 'fixed', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
      {frameImages.map((imageUrl, index) => (
        <SelectionItem key={index} imageUrl={imageUrl} />
      ))}
    </div>
  );
}

export default Selection;
