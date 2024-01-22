import React from 'react'
import { useState } from 'react'
import CheckBox from './CheckBox'

const ProductFilter = ({ products, availableColors }) => {
	const [selectedColors, setSelectedColors] = useState([])

	if (!products) {
		return <div>Loading...</div>
	}

	const handleColorChange = color => {
		if (selectedColors.includes(color)) {
			setSelectedColors(
				selectedColors.filter(selectedColor => selectedColor !== color)
			)
		} else {
			setSelectedColors([...selectedColors, color])
		}
	}

	const filteredProducts = products.filter(product => {
		return selectedColors.length === 0 || selectedColors.includes(product.color)
	})

	return (
		<div>
			<h1>Select Colors</h1>
			{availableColors.map(color => (
				<CheckBox
					key={color}
					color={color}
					onChange={() => handleColorChange(color)}
				/>
			))}
			<h2>Filtered Products</h2>
			<ul>
				{filteredProducts.map(product => (
					<li key={product.id}>{product.name}</li>
				))}
			</ul>
		</div>
	)
}

export default ProductFilter
