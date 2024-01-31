import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		status: null,
		isLoading: false,
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload
			state.status = 'User set successfully'
		},
		logout: (state, action) => {
			state.user = null
			state.status = 'User logged out'
		},
	},
})

export const authReducer = authSlice.reducer
export const { setUser, logout } = authSlice.actions
