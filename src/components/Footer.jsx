import React from 'react'
import styled from 'styled-components'

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
       </FooterBtagDiv>
    </FooterDiv>
    </FooterStyledDiv>
  )
}

export default Footer

const FooterStyledDiv = styled.div`
width: 1440px;
height: 387px;
flex-shrink: 0;
border: 2px solid red ;
border-radius: 10px;
background: #9292EF;
`
const FooterDiv = styled.div`

`
const FooterDivbteg = styled.div`
width: 159.402px;
b{
color: #FFF;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
const FooterBtagDiv = styled.div`
border: 2px solid red ;
width: 100px;
justify-content: space-around;
height: 150px;
display: flex;
flex-direction: column;
b{
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`