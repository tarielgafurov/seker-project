import { createSlice } from '@reduxjs/toolkit'
import { fetchData } from '../../fetchData'

export const fetchOrders = () => async dispatch => {
	try {
		const ordersData = await fetchData('admin/order/')
		dispatch(setOrders(ordersData))
	} catch (error) {
		console.error('Error fetching orders:', error.message)
	}
}

const orderSlice = createSlice({
	name: 'orders',
	initialState: {
		orders: [],
		status: 'idle',
		error: null,
	},
	reducers: {
		setOrders: (state, action) => {
			state.orders = action.payload
			state.status = 'succeeded'
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchOrders.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchOrders.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export const { setOrders } = orderSlice.actions
export default orderSlice.reducer
