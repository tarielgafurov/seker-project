import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './../UI/button/Button'
import Input from '../UI/input/Input'
import SearchIcon from '@mui/icons-material/Search'
export default function Header() {
	return (
		<ConteynerHeader>
			<div>E</div>
			<Seker>
				<h1>Seker</h1>
				<span>твой лучший гаджет</span>
			</Seker>
			<InputCont>
				<Input
					placeholder={'Что вы ищете?'}
					width={'416px'}
					borderRadius={'10px 0px 0px 10px'}
					padding={'15px'}
				/>
				<Button backroundColor={'#9292EF'} borderRadius={'0px 10px 10px 0px'}>
					<SearchIcon />
				</Button>
			</InputCont>
			{false ? (
				<Button onClick={''}>Выйты</Button>
			) : (
				<Link to={'/login'}>Войти</Link>
			)}
		</ConteynerHeader>
	)
}

const ConteynerHeader = styled.div`
	position: fixed;
	width: 100%;
	height: 56px;
	display: flex;
	background-color: aliceblue;
	justify-content: space-between;
	align-items: center;
	/* top: 2      px; */
	/* left: 135px; */
	/* background-color:rgb(248, 248, 50); */
	z-index: 30;
`
const Seker = styled.div`
	width: 300px;
	border: 1px solid #000;
	.h1 {
		font-family: Montserrat;
		font-family: Montserrat;
		font-size: 33px;
		font-weight: 600;
		line-height: 40px;
		letter-spacing: 0em;
		text-align: left;
		border: 1px solid #000;
	}
	.span {
		color: #000;
		font-family: Montserrat;
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		width: 161.132px;
	}
`
const InputCont = styled.div`
	display: flex;
`
