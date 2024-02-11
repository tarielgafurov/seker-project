import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../UI/button/Button'
import Input from '../../UI/input/Input'

function Register(props) {
	const [username, setUserName] = useState('')
	const [password, setPassword] = useState('')


	const handleSubmit = async e => {
		e.preventDefault()
		setUserName('')
		setPassword('')
		// dispatch(login({ username, password }))
	}

	return (
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

				<Input
					name='password'
					value={password}
					onChange={value => setPassword(value)}
					width='369px'
					borderRadius='10px'
					placeholder='Пароль'
					type='password'
				/>

				<Button
					type='submit'
					width={'369px'}
					backgroundColor='#FC3A74'
					borderRadius={'10px'}
					// disabled={isLoading} // Делаем кнопку неактивной во время загрузки
				>
					{/* {isLoading ? 'Загрузка ...' : 'Войти'} */}
                    Войти
				</Button>
			</FormRegister>
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