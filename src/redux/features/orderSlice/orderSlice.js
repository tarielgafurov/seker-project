// slices/orderSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios/instance'

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
	const response = await axios.get('/admin/order/')
	return response.data
})

const orderSlice = createSlice({
	name: 'orders',
	initialState: {
		orders: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchOrders.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchOrders.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.orders = action.payload
			})
			.addCase(fetchOrders.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export default orderSlice.reducer
