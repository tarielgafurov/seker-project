import React from 'react';
import styled from 'styled-components';

const RadioColor = (props) => {
  const handleSvgClick = () => {

  };

  return (
    <div>
      <SvgStyled onClick={handleSvgClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill='#C1C1C1'>
        <circle cx="15" cy="15" r="13" fill={props.color} />
        <circle cx="15" cy="15" r="14.5" stroke={props.border} />
      </SvgStyled>
    </div>
  );
};

export default RadioColor;

const SvgStyled = styled.svg`
  width: ${(props) => props.width || '30px'}; 
  height: ${(props) => props.height || '30px'};
`;
