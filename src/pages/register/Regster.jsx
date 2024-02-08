import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' // Импортируем useDispatch и useSelector
import Input from '../../UI/input/Input'
import styled from 'styled-components'
import Button from '../../UI/button/Button'
import BlurredBackground from './BlurredBackground'
import { login } from '../../store/features/auth/authSlice' // Импортируем action creator login из authSlice

function Register(props) {
	const [username, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch() // Получаем функцию диспатча

	const isLoading = useSelector(state => state.auth.isLoading) // Получаем состояние загрузки из стейта

	const handleSubmit = async e => {
		e.preventDefault()
		setUserName('')
		setPassword('')
		dispatch(login({ username, password }))
	}

	return (
		<BlurredBackground>
			<FormRegister onSubmit={handleSubmit}>
				<h1>Мой профиль</h1>
				<Input
					name='username'
					value={username}
					onChange={value => setUserName(value)}
					width='369px'
					borderRadius='10px'
					placeholder='E-mail (Gmail)'
				/>
				{/* Отображаем ошибку, если есть */}
				{/* {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>} */}

				<Input
					name='password'
					value={password}
					onChange={value => setPassword(value)}
					width='369px'
					borderRadius='10px'
					placeholder='Пароль'
					type='password'
				/>
				{/* Отображаем ошибку, если есть */}
				{/* {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>} */}

				<Button
					type='submit'
					width={'369px'}
					backgroundColor='#FC3A74'
					borderRadius={'10px'}
					disabled={isLoading} // Делаем кнопку неактивной во время загрузки
				>
					{isLoading ? 'Загрузка ...' : 'Войти'}
				</Button>
			</FormRegister>
		</BlurredBackground>
	)
}

export default Register

const FormRegister = styled.form`
	width: 568px;
	height: 523px;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-evenly;
	border-radius: 30px;
	background: #d9d9d9;
	backdrop-filter: blur(8.5px);

	h1 {
		width: 243px;
		height: 32px;
		flex-shrink: 0;
		color: #fc3a74;
		font-family: Montserrat;
		font-size: 32px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}
`

const ErrorMessage = styled.div`
	color: red;
	margin-top: 5px;
	font-size: 14px;
`
