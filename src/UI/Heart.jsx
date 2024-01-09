import React, { useState } from 'react';

const HeartSVG = () => {
  const [isFilled, setFilled] = useState(false);

  const toggleFill = () => {
    setFilled(!isFilled);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100"
      height="100"
      style={{ cursor: 'pointer' }}
      onClick={toggleFill}
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2 9.36 2 11.11 3.05 12 4.74 12.89 3.05 14.64 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.78-3.4 6.75-8.55 12.54L12 21.35z"
        fill="none"
        stroke="#e74c3c"
        strokeWidth="2"
      />
      <path
        d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2 9.36 2 11.11 3.05 12 4.74 12.89 3.05 14.64 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.78-3.4 6.75-8.55 12.54L12 21.35z"
        fill={isFilled ? '#e74c3c' : 'white'}
      />
    </svg>
  );
};

export default HeartSVG;
