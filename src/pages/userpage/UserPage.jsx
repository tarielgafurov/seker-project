import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../../store/features/features/userpageGet/userPageGet'
import Heart from '../../UI/Heart'
import { createProduct } from '../../store/features/post/heartPostSlice'

const UserPage = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.products.items)
	const status = useSelector(state => state.products.status)
	const error = useSelector(state => state.products.error)
	const [state, setState] = useState([])

	useEffect(() => {
		if (products && products.results) {
			setState(products.results)
		}

		if (status === 'idle') {
			dispatch(fetchProducts())
		}
	}, [dispatch, status, products])

	const handleHeartClick = (
		productId,
		title,
		price,
		haractik,
		inputValue,
		isChecked
	) => {
		console.log('klick')
		dispatch(
			createProduct({
				productId,
				title,
				price,
				haractik,
				inputValue,
				isChecked,
			})
		)
	}

	if (status === 'loading') {
		return <div>Loading...</div>
	}

	if (status === 'failed') {
		return <div>Error: {error}</div>
	}

	return (
		<StyleProduct>
			{state.map(product => (
				<div key={product.id}>
					<StyledCont>
						<div>
							{product.images.map(image => (
								<div key={image.id}>
									<img src={image.image} alt={image.alt} />
								</div>
							))}
							<span>{product.price}</span>
							<h1>{product.title}</h1>
						</div>
						<HeartStyle>
							<Heart
								productId={product.id}
								onClick={() =>
									handleHeartClick(
										product.id,
										product.title,
										product.price,
										product.haractik,
										product.inputValue,
										product.isChecked
									)
								}
							/>
							<Link
								to={{
									pathname: `/apple15/${product.id}`,
									state: {
										images: product.images,
										title: product.title,
										haractik: product.haractik,
										price: product.price,
										// Другие данные, которые вы хотите передать
									},
								}}
							>
								{/* Используем Link и создаем ссылку на новую страницу */}
								<div>П</div>
							</Link>
						</HeartStyle>
					</StyledCont>
				</div>
			))}
		</StyleProduct>
	)
}

export default UserPage

const StyleProduct = styled.div`
	display: flex;
	width: 900px;
	height: 900px;
	border: 2px solid red;
	justify-content: center;
	flex-flow: wrap;
`

const StyledCont = styled.div`
	margin: 10px;
	width: 260px;
	height: 384px;
	flex-shrink: 0;
	border-radius: 10px;
	background: #fff;
	box-shadow: 2px 2px 16px 0px #c1c1c1;
	align-items: center;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 2px solid;
	img {
		width: 102px;
		height: 76px;
		flex-shrink: 0;
	}
`

const HeartStyle = styled.div`
	display: flex;
	align-items: start;
	height: 90%;
	width: 40px;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
`
