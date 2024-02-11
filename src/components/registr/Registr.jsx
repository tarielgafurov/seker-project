import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../../UI/button/Button'
import Input from '../../UI/input/Input'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authRequest } from '../../store/slices/authSlice'

function Register(props) {
	const [username, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const {isAuth} = useSelector((prevState)=>prevState.auth)
	const [search, setSearch] = useSearchParams()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	console.log(isAuth);


	const handleSubmit = async e => {
		e.preventDefault()
		setUserName('')
		setPassword('')
		// dispatch(login({ username, password }))
	}

	const closeRegirterForm=()=>{
		search.delete("registr")
		setSearch(search)
	}

	const signInHandler=()=>{
		const inputData = {
			username,
			password
		}
		console.log(inputData);
		dispatch(authRequest(inputData))
	}

	useEffect(()=>{
		if(isAuth){
			navigate("/admin")
		}
	}, [isAuth, navigate])

	return (
		<>
			<RegisterBackdrop onClick={closeRegirterForm}></RegisterBackdrop>
			<FormRegister onSubmit={handleSubmit}>
				<h1>Мой профиль</h1>
				<Input
					name='username'
					value={username}
					onChange={value => setUserName(value)}
					width='269px'
					borderRadius='10px'
					placeholder='E-mail (Gmail)'
				/>

				<Input
					name='password'
					value={password}
					onChange={value => setPassword(value)}
					width='269px'
					borderRadius='10px'
					placeholder='Пароль'
					type='password'
				/>

				<Button
					type='submit'
					width={'269px'}
					backgroundColor='#FC3A74'
					borderRadius={'10px'}
					onClick={signInHandler}
					// disabled={isLoading} // Делаем кнопку неактивной во время загрузки
				>
					{/* {isLoading ? 'Загрузка ...' : 'Войти'} */}
                    Войти
				</Button>
			</FormRegister>
		</>
	)
}

export default Register

const FormRegister = styled.form`
	width: 398px;
	height: 380px;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-evenly;
	border-radius: 30px;
	background: #d9d9d9;
	backdrop-filter: blur(8.5px);
	position: fixed;
	left: 575px;
	top: 50px;


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
	input::placeholder{
		color: grey;
	}
`

const ErrorMessage = styled.div`
	color: red;
	margin-top: 5px;
	font-size: 14px;
`
const RegisterBackdrop = styled.div`
	position: fixed;
	width: 1170px;
	height: 500px;
	background-color: #000000c0;
	position: absolute;
	/* top: -50px; */
`