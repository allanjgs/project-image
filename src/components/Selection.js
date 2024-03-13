import React from 'react';
import SelectionItem from './SelectionItem';
import { TbPhotoCancel } from "react-icons/tb";

import { AiOutlineCloseSquare } from "react-icons/ai";


function importAll(r) {
  return r.keys().map(r);
}

const Selection = ({ isOpen, onSelectImage, onClearFrame, onClose }) => {
  if (!isOpen) return null;

  const frameImages = importAll(require.context('../assets/frame', false, /\.(png)$/));

  return (
    <div className="bg-white border border-gray-300 p-4 h-300 overflow-y-auto  flex flex-row gap-x-2 fixed top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 items-center">
      <button className="absolute top-1 right-1 text-red-600 hover:text-red-300" onClick={onClose}>
        <AiOutlineCloseSquare size={24} />
      </button>
      <div className="flex flex-row gap-x-2 flex-wrap">
        {frameImages.map((imageUrl, index) => (
          <SelectionItem key={index} imageUrl={imageUrl} onSelectImage={onSelectImage} />
        ))}
      </div>
      <button className="mr-4 cursor-pointer hover:text-gray-400" onClick={onClearFrame}>
        <TbPhotoCancel size={100} />
      </button>
    </div>
  );
}

export default Selection;
