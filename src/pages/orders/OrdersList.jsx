import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../../store/features/orderSlice'

const OrdersList = () => {
	const dispatch = useDispatch()
	const orders = useSelector(state => state.orders.orders)
	const status = useSelector(state => state.orders.status)
	const error = useSelector(state => state.orders.error)
	const [state, setState] = useState([])

	useEffect(() => {
		if (orders && orders.results) {
			setState(orders.results)
		}

		if (status === 'idle') {
			dispatch(fetchOrders())
		}
	}, [dispatch, status, orders])

	if (status === 'loading') {
		return <div>Loading...</div>
	}

	if (status === 'failed') {
		return <div>Error: {error}</div>
	}

	console.log(state)
	return (
		<div>
			<h2>Список заказов</h2>
			<ul>
				{state.map(order => (
					<li key={order.id}>
						<h1>Product: {order.city}</h1>
						<h1>Adress: {order.address} </h1>
						<h1>Comment: {order.comment}</h1>
						<h1>Price: {order.price}</h1>
						<h1>Customer:{order.customer}</h1>
						{/* Add more details as needed */}
					</li>
				))}
			</ul>
		</div>
	)
}

export default OrdersList
