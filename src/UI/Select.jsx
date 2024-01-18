// Select.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Select = ({ width, height, onChange, ...props }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const onChangeHandler = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <SelectStyled width={width} height={height} {...props}>
      <select onChange={onChangeHandler} value={selectedValue}>
        {props.children}
      </select>
    </SelectStyled>
  );
};

export default Select;

const SelectStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  select {
    width: ${(props) => props.width || '200px'};
    height: ${(props) => props.height || '30px'};
  }
`;
