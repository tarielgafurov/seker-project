import React from 'react';
import { useSelector } from 'react-redux';
import ColorCheckbox from './ColorCheckbox';

const ColorList = () => {
  const colors = useSelector(state => state.colors);

  return (
    <div>
      <h2>Color List</h2>
      {colors.map(color => (
        <ColorCheckbox key={color.id} color={color} />
      ))}
    </div>
  );
};

export default ColorList;
