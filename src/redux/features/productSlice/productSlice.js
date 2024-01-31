// slices/productSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../../utils/axios/instance'

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const response = await axios.get('/admin/product/')
		return response.data
	}
)

const productSlice = createSlice({
	name: 'products',
	initialState: {
		items: [], // Инициализируем items пустым массивом
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.items = action.payload // Сохраняем данные в items
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export default productSlice.reducer
