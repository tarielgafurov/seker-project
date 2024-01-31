import React, { useEffect, useState } from 'react'
import Input from '../../UI/input/Input'
import styled from 'styled-components'
import Button from '../../UI/button/Button'
import BlurredBackground from './BlurredBackground'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { setUser } from '../../redux/features/auth/authSlice' // Adjust import here
import axios from '../../utils/axios/instance'

function Register(props) {
	const [username, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const { status, isLoading } = useSelector(state => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [errors, setErrors] = useState({ username: '', password: '' })

	useEffect(() => {
		console.log(status)
		if (status) {
			toast(status)
		}
	}, [status, navigate, isLoading])

	const validateForm = () => {
		let valid = true
		const newErrors = {}
		setErrors({ ...newErrors })
		if (!password.trim()) {
			newErrors.password = 'Введите пароль'
			valid = false
		}

		setErrors(newErrors)
		return valid
	}

	const handleSubmit = async e => {
		e.preventDefault()

		if (validateForm()) {
			try {
				const response = await axios.post('/token/', { username, password })
				console.log('Successful response:', response.data)
				const data = { username, password }
				dispatch(setUser(data))
				setPassword('')
				setUserName('')
				navigate('/order')
			} catch (error) {
				console.error('Ошибка при регистрации:', error)
				toast.error('Ошибка при регистрации. Пожалуйста, попробуйте еще раз.')
			}
		}
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
				{errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}

				<Input
					name='password'
					value={password}
					onChange={value => setPassword(value)}
					width='369px'
					borderRadius='10px'
					placeholder='Пароль'
					type='password'
				/>
				{errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

				<Button
					type='submit'
					width={'369px'}
					backgroundColor='#FC3A74'
					borderRadius={'10px'}
					disabled={isLoading}
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
