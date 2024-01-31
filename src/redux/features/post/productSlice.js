import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios/instance'

export const createProduct = createAsyncThunk(
	'products/createProduct',
	async productData => {
		try {
			const response = await axios.post('/admin/product/', productData)
			console.log(response)
			return response.data
		} catch (error) {
			throw new Error(error.response.data.message || 'Error creating product')
		}
	}
)

const postProductSlice = createSlice({
	name: 'products',
	initialState: {
		titleValue: '',
		priceValue: '',
		haractikValue: '',
		inputValue: '',
		isChecked: false,
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(createProduct.fulfilled, (state, action) => {})

		builder.addCase(createProduct.rejected, (state, action) => {
			console.error('Error creating product:', action.error.message)
		})
	},
})

export default postProductSlice.reducer
