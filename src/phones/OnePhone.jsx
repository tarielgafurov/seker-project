import React from 'react';
import styled from 'styled-components';
import Heart from '../UI/Heart';
import SliderMaterial from '../UI/SliderMaterial';


const PhoneChange = [
  {
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
    title: "Apple Iphone 15 Pro Max",
    gb: "256",
    prise: "136 000 сом",
    coments: "13 отзывов"
  },
  {
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
    title: "Iphone 15",
    gb: "256",
    prise: "136 000 сом",
    coments: "13 отзывов"
  },
  {
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
    title: "Iphone 15",
    gb: "256",
    prise: "136 000 сом",
    coments: "13 отзывов"
  },
  {
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
    title: "Iphone 15",
    gb: "256",
    prise: "136 000 сом",
    coments: "13 отзывов"
  },
  {
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
    title: "Iphone 15",
    gb: "256",
    prise: "136 000 сом",
    coments: "13 отзывов"
  },
  {
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
    title: "Iphone 15",
    gb: "256",
    prise: "136 000 сом",
    coments: "13 отзывов"
  }
];

const PhoneList = () => {
  return (
    <StyledPhoneList>
       <StyledSlider>
        <SliderMaterial/>
       </StyledSlider>
      <StyledPhoneColumn>
        {PhoneChange.map((phone, index) => (
          <StyledPhoneCard key={index}>
            <StyledHeartContainer>
              <Heart/>
            </StyledHeartContainer>
            <StyledPhoneImage src={phone.image} alt="ugiug" />
            <h3>{phone.title}</h3>
            <StyledParagraph>{phone.gb}Gb</StyledParagraph>
            <h2>{phone.prise}</h2>
            <StyledParagraph>{phone.coments}</StyledParagraph>
          </StyledPhoneCard>
        ))}
      </StyledPhoneColumn>
    </StyledPhoneList>
  );
};

const StyledPhoneList = styled.div`
width: 1440px;
  border: 2px solid red ;
display: flex;
margin: auto;
`;

const StyledPhoneColumn = styled.div`
  border: 2px solid red ;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`;

const StyledPhoneCard = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  margin-bottom: 25px;
  width: 270px;
  height: 424px;
  font-family: Arial, sans-serif;
  text-align: left;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
`;

const StyledHeartContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const StyledPhoneImage = styled.img`
  width: 150px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
  margin-left: 60px;
  margin-top: 25px;
`;

const StyledParagraph = styled.p`
  color: gray;
`;
const StyledSlider = styled.div`
width: 242px;
height: 1px;
border: 2px solid red ;
`


export default PhoneList;

