// AppRouter.js

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from '../pages/register/Regster'
import Apple15 from '../pages/Apple15'
import InputSeker from '../pages/InputSeker'
import OrdersList from '../pages/orders/OrdersList'
import ProductsList from '../pages/product/ProductsList'
import UserPage from '../pages/userpage/UserPage'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/order' element={<OrdersList />} />
			<Route path='/product' element={<ProductsList />} />
			<Route path='/register' element={<Register />} />
			<Route path='//apple15/:productId' element={<Apple15 />} />
			<Route path='/inputseker' element={<InputSeker />} />
			<Route path='/' element={<UserPage />} />

			{/* Add additional routes if needed */}
		</Routes>
	)
}

export default AppRouter
