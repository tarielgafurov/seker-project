import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleColor } from '../actions';

const ColorCheckbox = ({ color }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange =() => {


    dispatch(toggleColor(color.name));
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={color.selected}
          onChange={handleCheckboxChange}
        />
        {color.name}
      </label>
    </div>
  );
};

export default ColorCheckbox;
