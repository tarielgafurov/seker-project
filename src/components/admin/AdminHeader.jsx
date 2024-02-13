
import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
// import image from '../components/Assets/Vector.png'
// import image1 from '../components/Assets/Vector (2).png'
// import image2 from '../components/Assets/Vector (1).png'
// import LongMenu from '../UI/LongMenu/LongMenu'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../UI/input/Input'
import Button from '../../UI/button/Button'

export default function AdminHeader() {
	const navigate = useNavigate()
	return (
		<ConteynerHeader>
			{/* <LongMenu cont={'bar'} /> */}
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
					<Link to={'/'} underline='hover'>
						Выйти
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
						Ордер
					</Link> 
				</b>
			</ProfileDiv>
			<Button onClick={()=>{navigate("addPhone")}}>Add phone</Button>
		</ConteynerHeader>
	)
}

const ConteynerHeader = styled.div`
	position: fixed;
	width: 1170px;
	display: flex;
	background-color: aliceblue;
	justify-content: space-between;
	align-items: center;
	z-index: 30;
	margin: auto;
	padding: 10px;
	position: fixed;
	top: 0;
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