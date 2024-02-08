import { createSlice } from '@reduxjs/toolkit'
import { fetchData } from '../../fetchData'

export const createProduct = productData => async dispatch => {
	try {
		const response = await fetchData('admin/product/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(productData),
		})
		dispatch(createProductSuccess(response))
	} catch (error) {
		console.error('Error creating product:', error.message)
	}
}

const postProductSlice = createSlice({
	name: 'products',
	initialState: {
		titleValue: '',
		priceValue: '',
		haractikValue: '',
		inputValue: '',
		isChecked: false,
	},
	reducers: {
		createProductSuccess: (state, action) => {
			// здесь можно обновить состояние, если необходимо
		},
	},
	extraReducers: builder => {
		builder.addCase(createProduct.rejected, (state, action) => {
			console.error('Error creating product:', action.error.message)
		})
	},
})

export default postProductSlice.reducer
