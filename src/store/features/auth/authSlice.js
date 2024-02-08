import { createSlice } from '@reduxjs/toolkit'
import { fetchData } from '../../fetchData'

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		token: null,
		error: null,
		isLoading: false,
	},
	reducers: {
		loginStart(state) {
			state.isLoading = true
			state.error = null
		},
		loginSuccess(state, action) {
			console.log(action)
			state.isLoading = false
			state.user = action.payload.user
			state.token = action.payload.token
		},
		loginFailure(state, action) {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions

export const login = credentials => async dispatch => {
	dispatch(loginStart())
	try {
		const responseData = await fetchData({
			endpoint: 'token/',
			method: 'POST',
			body: credentials,
		})
		dispatch(loginSuccess(responseData)) // Предполагается, что сервер вернет user и token
	} catch (error) {
		dispatch(loginFailure(error.message))
	}
}

export default authSlice.reducer
