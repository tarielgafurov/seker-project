import React, { useState } from 'react';

const ColorList = () => {
  const [selectedColors, setSelectedColors] = useState([]);

  const colors = [ 


    { name: 'Красный', icon: '🔴' }, 
    { name: 'Черный', icon: '⚫' },
    { name: 'Белый', icon: '⚪' },
    { name: 'Синий', icon: '🔵' },
    { name: 'Голубой', icon: '🔵' },
    { name: 'Розовый', icon: '🟣' },

  ];

  const handleCheckboxChange = (colorName) => {
    const isSelected = selectedColors.includes(colorName);
    if (isSelected) {
      setSelectedColors(selectedColors.filter(color => color !== colorName));
      console.log(false);
    } else {
      setSelectedColors([...selectedColors, colorName]);
      console.log(true);
    }
  };
  


  return (
    
    
    <div> 
      
      {colors.map((color, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={color.name.toLowerCase()}
            value={color.name.toLowerCase()}
            checked={selectedColors.includes(color.name.toLowerCase())}
            onChange={() => handleCheckboxChange(color.name.toLowerCase())}
          />
          <label htmlFor={color.name.toLowerCase()}>{color.name} {color.icon}</label>
        </div>
      ))}
    </div>
  );
};

export default ColorList;

