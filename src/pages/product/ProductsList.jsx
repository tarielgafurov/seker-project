// ProductsList.js

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/features/productSlice/productSlice'

const ProductsList = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.products.items)
	const status = useSelector(state => state.products.status)
	const error = useSelector(state => state.products.error)

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchProducts())
		}
	}, [status, dispatch])

	if (status === 'loading') {
		return <div>Loading...</div>
	}

	if (status === 'failed') {
		return <div>Error: {error}</div>
	}

	return (
		<div>
			<h2>Product List</h2>
			<ul>
				{Array.isArray(products) ? (
					products.map(product => <li key={product.id}>{product.name}</li>)
				) : (
					<p>No products available.</p>
				)}
			</ul>
		</div>
	)
}

export default ProductsList
