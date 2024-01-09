import styled from 'styled-components';
import Slider from 'react-slider';
import { useState } from 'react';

const MIN = 20000;
const MAX = 100000;

const SliderMaterial = () => {

  const [values, setValues] = useState([MIN, MAX])
  console.log('values:', values);
  return (
    <ContainerStyle>
      <BoxStyle>
        <FilterStyle><h3>Фильтры</h3> <h4>Cбросить</h4></FilterStyle>
        <span>Найдено 15 вариантов</span>

        <StyleDiv>
          <h3>Цена</h3>
          <h4>Сом</h4>
        </StyleDiv>


        <SliderStyle>
          <Slider onChange={setValues}
            value={values}
            min={MIN}
            max={MAX} />
        </SliderStyle>

        <PriceStyle>
          <div>
            {values[0]}
          </div>
          <div>
            {values[1]}
          </div>
        </PriceStyle>

      </BoxStyle>

    </ContainerStyle>
  );
}

export default SliderMaterial;

const ContainerStyle = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
`

const BoxStyle = styled.div`
width: 100%;
max-width: 320px;
padding: 36px 32px;
background:#fff;
border-radius:10px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

`
const FilterStyle = styled.div`
display:flex;
justify-content: space-between;

h4{
  color:gray
}
`
const StyleDiv = styled.div`
display: flex;

h4{
  margin-left:30px;
  color:grey;
}
`
const SliderStyle = styled.div`
width: 100%;
height: 2px;
background-color:#cdd9ed;
margin-top: 40px;

.thumb{
  width: 18px;
  height: 18px;
  cursor: grab;
  background: red;
  border-radius: 50%;
  /* border: 2px solid red; */
  top: -10px; 
}
`
const PriceStyle = styled.div` 
margin-top:35px;
font-weight:500;
color:#275efe;
display: flex;
justify-content: space-between;
 
`