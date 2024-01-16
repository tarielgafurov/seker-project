import React from 'react';
import styled from 'styled-components';

const Select = (props) => {
  return (
    <SelectStyled>
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

  select {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }
`;
