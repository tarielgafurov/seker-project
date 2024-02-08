// AppRouter.js

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from '../pages/register/Regster'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/register' element={<Register />} />
		

			{/* Add additional routes if needed */}
		</Routes>
	)
}

export default AppRouter
