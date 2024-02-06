import React from 'react';
import styled from 'styled-components';

const RadioColor = ({ color, border, width, height, onClick }) => {
  const handleSvgClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <SvgStyled
      onClick={handleSvgClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width={width}
      height={height}
    >
      <circle cx="15" cy="15" r="13" fill={color || '#C1C1C1'} />
      <circle cx="15" cy="15" r="14.5" stroke={border} fill="none" />
    </SvgStyled>
  );
};

export default RadioColor;

const SvgStyled = styled.svg`
  width: ${(props) => props.width || '30px'};
  height: ${(props) => props.height || '30px'};
  cursor: pointer;
  border:1px solid grey;
  border-radius:100%;
`;
