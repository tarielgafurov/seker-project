import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		try {
			const response = await fetch('/admin/product/')
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
		items: [],
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
				state.items = action.payload
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export default productSlice.reducer
