import React from 'react'
import ContinerCheckBox from '../../../UI/checkout/ContinerCheckBox'

const FilterColor = () => {
	const a = ["pink", "black", "white"]

  return (
    <div>
        <h1>Цвет</h1>
      <ContinerCheckBox products={a} />
    </div>
  )
}

export default FilterColor
