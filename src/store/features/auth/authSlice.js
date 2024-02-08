import { createSlice } from '@reduxjs/toolkit'
import { fetchData } from '../../fetchData'

export const authSlice = createSlice({
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

export const { setUser, logout } = authSlice.actions

export const fetchUser =
	(method = 'POST', data = null) =>
	async dispatch => {
		try {
			const response = await fetchData({
				endpoint: '/token/',
				method: 'POST',
				body: data,
			})
			const userData = response?.payload
			dispatch(setUser(userData))
		} catch (error) {
			console.error('Error fetching user data:', error.message)
		}
	}

export default authSlice.reducer
