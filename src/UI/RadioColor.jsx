import React from 'react';

const RadioColor = (props) => {
  const handleSvgClick = () => {
    console.log('Свет Радио:', props.nameColor);
  };

  return (
    <div>
      <svg onClick={handleSvgClick} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 30 30" fill='#C1C1C1'>
        <circle cx="15" cy="15" r="13" fill={props.color} />
        <circle cx="15" cy="15" r="14.5" stroke={props.border} />
      </svg>
    </div>
  );
};

export default RadioColor;
