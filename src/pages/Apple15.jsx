import React from 'react'
import styled from 'styled-components'
import image from '../components/Assets/Group 314.png'
import image1 from '../components/Assets/image 10 (1).png'
import image2 from '../components/Assets/image 10.png'
import Heart from '../UI/Heart'
import RadioColor from '../UI/RadioColor'
import Button from '../UI/button/Button'

const Apple15 = () => {
	return (
		<DivStyled>
			<ImageDiv>
				<Image>{/* <img src={image} alt='' /> */}</Image>
				<ImageRowDiv>
					<ImgDiv>{/* <img src={image} alt='' /> */}</ImgDiv>
					<ImgDiv1>{/* <img src={image1} alt='' /> */}</ImgDiv1>
					<ImgDiv2>
						<img src={image2} alt='' />
					</ImgDiv2>
				</ImageRowDiv>
			</ImageDiv>
			<PhoneNameDiv>
				<PhoneName>
					<b>Apple Iphone 15 Pro</b>
					<Heart />
				</PhoneName>
				<RamPhone>
					<b>256Gb</b>
				</RamPhone>
				<PricePhone>
					<b>116 000 сом</b>
				</PricePhone>
				<ColorPhone>
					<ColorDiv>
						<b>Цвет :</b>
					</ColorDiv>
					<RadioDiv>
						<RadioColor color={'#E7E0D6'} />
						<RadioColor color={'black'} />
						<RadioColor color={'blue'} />
					</RadioDiv>
				</ColorPhone>
				<QuantityPhone>
					<Quantity>
						<b>Количество :</b>
					</Quantity>
					<BasketDiv>
						{/* <img src={image3} alt='' /> */}
						<BasketBteg>1</BasketBteg>
						<CounterDiv>
							<b>+</b>
						</CounterDiv>
					</BasketDiv>
				</QuantityPhone>
				<ButtonPhone>
					<Button
						backgroundColor={'#9292EF'}
						height={'65px'}
						color={'#FFF'}
						width={'232px'}
					>
						В корзину
					</Button>
					<Button
						backgroundColor={'#FFFFFF'}
						height={'65px'}
						width={'232px'}
						border={' 2px solid #9292EF'}
					>
						Купить сейчас
					</Button>
				</ButtonPhone>
			</PhoneNameDiv>
		</DivStyled>
	)
}

export default Apple15

const DivStyled = styled.div`
	margin: auto;
	margin-top: 100px;
	width: 1014.75px;
	height: 500px;
	display: flex;
	justify-content: space-between;
`
const ImageDiv = styled.div`
	width: 460px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 500px;
`
const Image = styled.div`
	width: 460px;
	height: 361px;
	flex-shrink: 0;
	border-radius: 10px;
	background: #e7e0d6;
	img {
		width: 357px;
		height: 365px;
		flex-shrink: 0;
	}
`
const ImgDiv = styled.div`
	width: 130px;
	height: 102px;
	flex-shrink: 0;
	border-radius: 10px;
	background: #e7e0d6;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	img {
		width: 50px;
		height: 63px;
		flex-shrink: 0;
	}
`
const ImgDiv1 = styled.div`
	width: 130px;
	height: 102px;
	flex-shrink: 0;
	border-radius: 10px;
	background: #e7e0d6;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	img {
		width: 50px;
		height: 74px;
		flex-shrink: 0;
	}
`
const ImgDiv2 = styled.div`
	width: 130px;
	height: 102px;
	flex-shrink: 0;
	border-radius: 10px;
	background: #e7e0d6;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	img {
		width: 64px;
		height: 67px;
		flex-shrink: 0;
	}
`
const ImageRowDiv = styled.div`
	display: flex;
	justify-content: center;
	justify-content: space-between;
`
const PhoneNameDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`

const PhoneName = styled.div`
	width: 500px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	b {
		width: 346px;
		height: 44px;
		flex-shrink: 0;
		color: #000;
		font-family: Montserrat;
		font-size: 33px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
`
const RamPhone = styled.div`
	display: flex;

	b {
		width: 80px;
		height: 31px;
		flex-shrink: 0;
		color: #878787;
		font-family: Montserrat;
		font-size: 23px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
`
const PricePhone = styled.div`
	width: 205px;
	height: 45px;
	flex-shrink: 0;
	b {
		color: #9292ef;
		font-family: Montserrat;
		font-size: 33px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
`
const ColorPhone = styled.div`
	display: flex;
	flex-direction: column;
	height: 70px;
	justify-content: space-between;
`
const RadioDiv = styled.div`
	display: flex;
	justify-content: space-between;
	width: 128px;
	height: 32px;
	flex-shrink: 0;
`
const ColorDiv = styled.div`
	display: flex;
	b {
		color: #000;
		font-family: Montserrat;
		font-size: 23px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
`
const CounterDiv = styled.button`
	width: 29px;
	height: 29px;
	flex-shrink: 0;
	border-radius: 5px;
	background: #9292ef;
	b {
		color: #fff;
		font-family: Montserrat;
		font-size: 23px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
`
const QuantityPhone = styled.div`
	display: flex;
	width: 300px;
	justify-content: space-between;
`
const Quantity = styled.div`
	b {
		color: #000;
		font-family: Montserrat;
		font-size: 23px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
`
const BasketDiv = styled.div`
	display: flex;
	width: 90px;
	justify-content: space-between;
`
const BasketBteg = styled.b`
	width: 6px;
	height: 22px;
	flex-shrink: 0;
	color: #000;
	font-family: Montserrat;
	font-size: 23px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`
const ButtonPhone = styled.div`
	display: flex;
	width: 500px;
	justify-content: space-evenly;
`
