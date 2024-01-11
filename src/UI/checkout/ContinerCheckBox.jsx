import React from 'react'
import Checkbox from './UI/checkout/CheckBox'
import ProductFilter from './UI/checkout/ProductFilter'
function ContinerCheckBox(props) {
	return (
		<div>
			<Checkbox color='pink'>Красный</Checkbox>
			<Checkbox color='black'>Черный</Checkbox>
			<Checkbox color='white'>Белый</Checkbox>
			<Checkbox color='blue'>Синий</Checkbox>
			<Checkbox color='lightblue'>Голубой</Checkbox>
			<Checkbox color='pink'>Розовый</Checkbox>
		</div>
	)
}

export default ContinerCheckBox
