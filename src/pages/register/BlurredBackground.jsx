import React from 'react'
import styled from 'styled-components'

const BlurredBackgroundContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #5d535380; /* Замените на свою картинку или цвет фона */
	background-size: cover;
	backdrop-filter: blur(0.5px); /* Регулируйте параметры размытия, если нужно */
`

const BlurredBackground = ({ children }) => {
	return <BlurredBackgroundContainer>{children}</BlurredBackgroundContainer>
}

export default BlurredBackground