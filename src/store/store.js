import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import inputSlice from './features/inputSuker/inputSlice'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		input: inputSlice,
	},
})
