import React from 'react'
import ContinerCheckBox from '../../../UI/checkout/ContinerCheckBox'

const FilterModel = () => {
    const model = ["Apple", "Nokia", "Realme", "Samsung", "Xiomi"]
  return (
    <div>
        <h1>Производитель</h1>
      <ContinerCheckBox products={model}/>
    </div>
  )
}

export default FilterModel
