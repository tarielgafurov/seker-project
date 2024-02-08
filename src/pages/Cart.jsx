import React from 'react'

const Cart = ({ cartItems, total, onCheckout }) => {
	return (
		<div className='cart'>
			<h2>Корзина</h2>
			<ul>
				{cartItems.map(item => (
					<li key={item.id}>
						{item.name} - ${item.price}
					</li>
				))}
			</ul>
			<p>Итого: ${total}</p>
			<button onClick={onCheckout}>Оформить заказ</button>
		</div>
	)
}
export default Cart
