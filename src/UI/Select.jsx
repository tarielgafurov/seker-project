import React from 'react';
import styled from 'styled-components';

const Select = (props) => {
  return (
    <SelectStyled style={{ width: props.width, height: props.height }}>
      <select>
        <option>{props.children}</option>
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
`;
