import React from 'react'
import SliderMaterial from '../../../UI/slider/SliderMaterial'
import styled from 'styled-components'

const FilterByPrice = () => {
  return (
    <PriceWrapper>
      <FilterText>
        <h1>Фильтры</h1>
        <span>Сбросить</span>
      </FilterText>
      <span>Найдено {15} вариантов</span>
      <h2>Цена</h2><span>Сом</span>
      <SliderMaterial/>
    </PriceWrapper>
  )
}

export default FilterByPrice

const PriceWrapper = styled.div`
  width: 305px;
  border: 2px solid red;
  padding: 16px;
`
const FilterText=styled.div`
  display: flex;
  border: 1px solid;
  justify-content: space-between  ;
`