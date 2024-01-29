import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { registerUserAPI } from './auth' // Предполагается, что у вас есть функция API для регистрации пользователя

const initialState = {
	username: null,
	password: null,
	token: null,
	isLoading: false,
}

export const registerUserAsync = createAsyncThunk(
	'auth',
	async ({ username, password, token }) => {
		try {
			const response = await registerUserAPI(username, password, token)
			console.log(response) // Логирование ответа для отладки
			return response
		} catch (error) {
			throw error
		}
	}
)

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(registerUserAsync.pending, state => {
				state.isLoading = true
			})
			.addCase(registerUserAsync.fulfilled, (state, action) => {
				state.isLoading = false
				state.status = action.payload.status || 'Success'
				state.token = action.payload.token || null
			})
			.addCase(registerUserAsync.rejected, (state, action) => {
				state.isLoading = false
				state.status = 'Error during registration'
				console.error('Registration error:', action.error)
			})
	},
})

export const { reducer: authReducer } = authSlice
export const checkIsAuth = state => Boolean(state.auth.token)
