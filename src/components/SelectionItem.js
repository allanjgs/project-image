import React from 'react';

const SelectionItem = ({ imageUrl, onSelectImage }) => {
  const handleClick = () => {
    onSelectImage(imageUrl);
  };

  return (
    <div className="w-32 h-32 overflow-hidden cursor-pointer" onClick={handleClick}>
      <img src={imageUrl} alt="Selection Item" className="object-cover w-full h-full" />
    </div>
  );
}

export default SelectionItem;
