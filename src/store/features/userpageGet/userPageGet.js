import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		try {
			const response = await fetch('user-page/product')
			if (!response.ok) {
				throw new Error('Failed to fetch products')
			}
			const data = await response.json()
			return data
		} catch (error) {
			throw new Error('Failed to fetch products')
		}
	}
)

const productSlice = createSlice({
	name: 'products',
	initialState: {
		products: {
			results: [],
			status: 'idle',
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
