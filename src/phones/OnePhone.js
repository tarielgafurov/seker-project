import React from 'react';
import styled from 'styled-components';




const PhoneChange = [
  {   
      image: "",
      title: "Iphone 15",
      gb: "256",
      prise: "136 000 сом",
      coments: "13 отзывов"
  },
  {
      image: "",
      title: "Iphone 15",
      gb: "256",
      prise: "136 000 сом",
      coments: "13 отзывов"
  },  
  {
      image: "",
      title: "Iphone 15",
      gb: "256",
      prise: "136 000 сом",
      coments: "13 отзывов"
  },
  {
      image: "",
      title: "Iphone 15",
      gb: "256",
      prise: "136 000 сом",
      coments: "13 отзывов"
  },
  {
      image: "",
      title: "Iphone 15",
      gb: "256",
      prise: "136 000 сом",
      coments: "13 отзывов"
  },
  {
      image: "",
      title: "Iphone 15",
      gb: "256",
      prise: "136 000 сом",
      coments: "13 отзывов"
  },

]


const PhoneList = () => {
  return (
    <>
    
      {PhoneChange.map((phone, index) => (
        <StyledPhoneCard key={index}>
          <StyledPhoneImage src={phone.image} alt="" />
          <h2>{phone.title}</h2>
          <p>{phone.gb}Gb</p>
          <p>{phone.prise}</p>
          <p>{phone.coments}</p>
        </StyledPhoneCard>
      ))}
    </>
  );
}


export default PhoneList;


const StyledPhoneCard = styled.div`

  border: 1px solid #BF4F74;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 270px;
  height: 384px;
  font-family: Arial, sans-serif;
  color: #BF4F74;
`;

const StyledPhoneImage = styled.div`
  width: 150px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;
