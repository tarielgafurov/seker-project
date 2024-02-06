import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from '../../components/UI/Image'; 

const images = [image1, image2, image3];

const FormImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ImageStyled>
      <ImageTransition>
        <GlobalImage>
          <Image src={images[currentImageIndex]} alt="" />
        </GlobalImage>
        <StyledImg>
          <Image src={images[(currentImageIndex + 1) % images.length]} alt="" />
          <Image src={images[(currentImageIndex + 2) % images.length]} alt="" />
        </StyledImg>
      </ImageTransition>
    </ImageStyled>
  );
};

export default FormImage;

const ImageStyled = styled.div`
  width: 1440px;
  height: 2071px;
  margin: auto;
  position: relative;

  img {
    width: 600px;
    margin-top: 100px;
  }
`;

const GlobalImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 600px;
    height: 300px;
    position: absolute;
    transition: transform 1s ease-in-out, opacity 1s ease-in-out; /* Add a transition for transform and opacity properties */
  }
`;

const ImageTransition = styled.div`
  width: 1350px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const StyledImg = styled.div`
  display: flex;
  justify-content: center;

  img {
    transition: transform 1s ease-in-out, opacity 1s ease-in-out; 
  }

  img:nth-child(2) {
    margin-left: 20px; 
  }
`;