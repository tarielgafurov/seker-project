import React from 'react'
import styled from 'styled-components'
import Image from '../components/Assets/Group 864.png'
import Image1 from '../components/Assets/Vector (3).png'
import Image2 from '../components/Assets/akar-icons_instagram-fill.png'
import Image3 from '../components/Assets/Vector (4).png'
import Image5 from '../components/Assets/Vector (5).png'
import Image6 from '../components/Assets/Group 314.png'

const Footer = () => {
	return (
		<FooterStyledDiv>
			<FooterDiv>
				<FooterDivbteg>
					<b>Покупателям</b>
				</FooterDivbteg>
				<FooterBtagDiv>
					<b>О нас</b>
					<b>Оплата</b>
					<b>Доставка</b>
					<b>Магазины</b>
					<UndifinedDiv>
						<img src={Image} alt='' />
					</UndifinedDiv>
				</FooterBtagDiv>
			</FooterDiv>
			<FooterDiv>
				<FooterDivbteg>
					<b>Режим работы</b>
				</FooterDivbteg>
				<FooterBtagDiv>
					<b>Ежедневно с 9:00 до 21:00</b>
					<b>Отдель продаж</b>
					<b>Будни с 9:00 до 21:00</b>
					<b>Доставка и сборка</b>
					<UndifinedDiv></UndifinedDiv>
				</FooterBtagDiv>
			</FooterDiv>
			<FooterDiv>
				<FooterDivbteg>
					<b>Связаться с нами</b>
				</FooterDivbteg>
				<FooterBtagDiv>
					<b>+996 708 112 610 </b>
					<b>+996 708 112 610 </b>
					<b>it-door@gmail.com</b>
					<p>Мы в соц. сетях</p>
					<VectorStyled>
						<img src={Image1} alt='' />
						<img src={Image2} alt='' />
						<img src={Image3} alt='' />
					</VectorStyled>
				</FooterBtagDiv>
			</FooterDiv>
			<VisaStyledDiv>
				<VisaStyledDivBtag>
					<b>Способ оплаты</b>
				</VisaStyledDivBtag>
				<VectorVisaSyled>
					<div>
						<img src={Image5} alt='' />
					</div>
					<div>
						<img src={Image6} alt='' />
					</div>
				</VectorVisaSyled>
				<MoneyStyledDiv>
					<b>Наличным в любом пункте самовывоза или картой</b>
				</MoneyStyledDiv>
				<ComfortStyled>
					<b>© Comfort. 2022</b>
				</ComfortStyled>
				<UndifinedDiv></UndifinedDiv>
			</VisaStyledDiv>
		</FooterStyledDiv>
	)
}

export default Footer

const FooterStyledDiv = styled.div`
	width: 1440px;
	height: 387px;
	display: flex;
	justify-content: center;
	justify-content: space-evenly;
	align-items: center;
	flex-shrink: 0;
	border-radius: 10px;
	background: #9292ef;
`
const FooterDiv = styled.div`
	width: 250px;
	height: 290px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
const FooterDivbteg = styled.div`
	display: flex;
	b {
		color: #fff;
		font-family: Montserrat;
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
`
const FooterBtagDiv = styled.div`
	justify-content: space-around;
	height: 250px;
	display: flex;
	flex-direction: column;
	b {
		display: flex;
		color: #fff;
		font-family: Montserrat;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	p {
		display: flex;
		color: #fff;
		font-family: Montserrat;
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
`
const UndifinedDiv = styled.div`
	width: 47px;
	height: 47px;
	flex-shrink: 0;
`
const VectorStyled = styled.div`
	width: 150px;
	display: flex;
	justify-content: space-between;
`

const VisaStyledDiv = styled.div`
	justify-content: space-between;
	width: 250px;
	height: 290px;
	display: flex;
	flex-direction: column;
`
const VisaStyledDivBtag = styled.div`
	width: 182.488px;
	display: flex;
	b {
		color: #fff;
		font-family: Montserrat;
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
`
const VectorVisaSyled = styled.div`
	display: flex;
	width: 100px;
	justify-content: space-between;
`
const MoneyStyledDiv = styled.div`
	width: 172.594px;
	display: flex;
	b {
		color: #fff;
		font-family: Montserrat;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
`
const ComfortStyled = styled.div`
	width: 162.7px;
	height: 20px;
	flex-shrink: 0;
	b {
		color: #f8f8f8;
		font-family: Montserrat;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
`