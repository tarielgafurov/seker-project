import styled from 'styled-components';
import Slider from 'react-slider';
import { useState } from 'react';

const MIN = 20000;
const MAX = 100000;

const SliderMaterial = () => {
  const [values, setValues] = useState([MIN, MAX]);
  console.log(values);

  return (
    <ContainerStyle>
      <BoxStyle>
        <SliderStyle>
          <Slider onChange={setValues}
            value={values}
            min={MIN}
            max={MAX}
          />
          <ValueIndicator leftOff={calculate(values[0], MIN, MAX)}>
            {values[0]}
          </ValueIndicator>
          <ValueIndicator leftOff={calculate(values[1], MIN, MAX)}>
            {values[1]}
          </ValueIndicator>
        </SliderStyle>
      </BoxStyle>
    </ContainerStyle>
  );
};
export default SliderMaterial;

 
const calculate = (value, min, max) => {
  return ((value - min) / (max - min)) * 100;  
};

const ContainerStyle = styled.div`
  /* min-height: 100vh; */
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxStyle = styled.div`
  width: 100%;

`;
const ValueIndicator = styled.div`
  position: absolute;
  top: 10px;  
  left: ${({ leftOff }) => `${leftOff}%`};  
  transform: translateX(-50%);
  font-weight: 500;
  font-size: 14px;
  color: #8B8787;
`
const SliderStyle = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background-color:gray;
  margin-top: 40px;
  border: 2px solid #8B8787;
   
  .thumb {
    width: 12px;
    height: 12px;
    cursor: grab;
    background: #f80421;
    border-radius: 50%;
    top: -6px;
    outline: none;

    &:active {
      cursor: grabbing;
    }
  }
`