import React from 'react'
import styled from 'styled-components'
import Button from './../UI/button/Button'
import Input from '../UI/input/Input'
import SearchIcon from '@mui/icons-material/Search'
// import image from '../components/Assets/Vector.png'
// import image1 from '../components/Assets/Vector (2).png'
// import image2 from '../components/Assets/Vector (1).png'
import LongMenu from '../UI/LongMenu/LongMenu'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
	return (
		<ConteynerHeader>
			<LongMenu cont={'bar'} />
			<Seker>
				<SekerDiv>
					<b>Seker</b>
				</SekerDiv>
				<SekerDiv1>
					<span>твой лучший гаджет</span>
				</SekerDiv1>
			</Seker>
			<InputCont>
				<Input
					borderRadius={'10px 0px  0px 10px '}
					placeholder={'Что вы ищете?'}
				/>
				<Button backroundColor={'#9292EF'} borderRadius={'0px 10px 10px 0px'}>
					<SearchIcon />
				</Button>
			</InputCont>
			<ProfileDiv>
				{/* <img src={image} alt='' /> */}
				<b>
					<Link to={'register'} underline='hover'>
						Войти
					</Link>
				</b>
			</ProfileDiv>
			<ProfileDiv>
				{/* <img src={image1} alt='' /> */}
				<b>
					<Link to={'zakladki'} underline='hover'>
						Закладки
					</Link>
				</b>
			</ProfileDiv>
			<ProfileDiv>
				{/* <img src={image2} alt='' /> */}
				<b>
					<Link to={'carzina'} underline='hover'>
						Корзина
					</Link>
				</b>
			</ProfileDiv>
		</ConteynerHeader>
	)
}

const ConteynerHeader = styled.div`
	position: fixed;
	width: 1170px;
	height: 56px;
	display: flex;
	background-color: aliceblue;
	justify-content: space-between;
	align-items: center;
	z-index: 30;
	margin: auto;
	padding: 15px;
`
const Seker = styled.div``
const SekerDiv = styled.div`
	b {
		color: #000;
		font-family: Montserrat;
		font-size: 33px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}
`
const SekerDiv1 = styled.div`
	color: #000;
	font-family: Montserrat;
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`
const InputCont = styled.div`
	display: flex;
	input {
		width: 468px;
		height: 40px;
		flex-shrink: 0;
		background: #f4f4f4;
	}
`
const ProfileDiv = styled.div`
	width: 90px;
	justify-content: space-between;
	display: flex;
	align-items: center;
	b {
		color: #075da8;
	}
`
const StyledNavLink = styled(NavLink)`
	font-family: Montserrat;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	text-decoration: none;
	color: black;
	&:hover {
		/* Add any additional hover styles if needed */
	}
`
