import React from 'react';
import styled from 'styled-components';

const RadioColor = ({ color, border, width, height }) => {
  const handleSvgClick = () => {
    
  };

  return (
    <div>
      <SvgStyled color={color} onClick={handleSvgClick} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="#C1C1C1">
        <circle cx="15" cy="15" r="13" fill={color} />
        <circle cx="15" cy="15" r="14.5" stroke={border} />
      </SvgStyled>
    </div>
  );
};

export default RadioColor;

const SvgStyled = styled.svg`
  border: ${(props) => props.stroke};
  fill: ${(props) => props.color || ''};
  width: ${(props) => props.width || '30px'};
  height: ${(props) => props.height || '30px'};
`;
