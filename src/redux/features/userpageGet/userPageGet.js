import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../../utils/axios/instance'

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const response = await axios.get('user-page/product/')
		return response.data
	}
)

const productSlice = createSlice({
	name: 'products',
	initialState: {
		products: {
			results: [],
			status: 'idle', // или какой-то начальный статус
			error: null,
		},
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, state => {
				state.products.status = 'loading'
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.products.status = 'succeeded'
				state.products.items = action.payload
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.products.status = 'failed'
				state.products.error = action.error.message
			})
	},
})

export default productSlice.reducer
