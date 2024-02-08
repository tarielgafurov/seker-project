// AppRouter.js

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from '../pages/register/Regster'
import InputSeker from '../pages/InputSeker'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/register' element={<Register />} />
			<Route path='/input' element={<InputSeker />}></Route>
		</Routes>
	)
}

export default AppRouter
