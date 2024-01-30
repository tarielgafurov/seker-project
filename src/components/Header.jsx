import React from 'react'
import styled from 'styled-components'
import Button from './../UI/button/Button'
import Input from '../UI/input/Input'
import SearchIcon from '@mui/icons-material/Search'
import image from '../components/Assets/Vector.png'
import image1 from '../components/Assets/Vector (2).png'
import image2 from '../components/Assets/Vector (1).png'
export default function Header() {
	return (
		<ConteynerHeader>
			<div></div>
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
					placeholder={'Что вы ищете?'}

				/>
				<Button backroundColor={'#9292EF'} borderRadius={'0px 10px 10px 0px'}>
					<SearchIcon />
				</Button>
			</InputCont>
			<ProfileDiv>
				<img src={image} alt="" />
				<b>Войти</b>
			</ProfileDiv>
			<ProfileDiv>
				<img src={image1} alt="" />
				<b>Закладки</b>
			</ProfileDiv>
			<ProfileDiv>
				<img src={image2} alt="" />
				<b>Корзина</b>
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
`
const Seker = styled.div`
`
const SekerDiv = styled.div`
b{
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
	input{
		width: 468px;
		height: 40px;
		flex-shrink: 0;
		border-radius: 10px;
	background: #F4F4F4;
	}
`
const ProfileDiv = styled.div`
width: 90px;
justify-content: space-between;
display: flex;
align-items: center;
b{
color: #000;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`