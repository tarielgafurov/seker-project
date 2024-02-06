import React from 'react'
import styled from 'styled-components'

function Button({
	color,
	width,
	borderRadius,
	padding,
	backgroundColor,
	fontSize,
	children,
	onClick,
	img,
	...props
}) {
	const onClickHandler = () => {
		onClick && onClick()
	}

	return (
		<ButtonStyled
			color={color}
			width={width}
			borderRadius={borderRadius}
			padding={padding}
			backgroundColor={backgroundColor}
			fontSize={fontSize}
			onClick={onClickHandler}
			{...props}
		>
			{img && <ImgStyled src={img} alt='icon' />}{' '}
			{/* Добавим проверку на наличие img */}
			{children}
		</ButtonStyled>
	)
}

export default Button

const ButtonStyled = styled.button`
	width: ${props => props.width || ''};
	background-color: ${props => props.backgroundColor || '#9292EF'};
	font-size: ${props => props.fontSize || '16px'};
	padding: ${props => props.padding || '10px 30px'};
	border-radius: ${props => props.borderRadius || '16px'};
	color: ${props => props.color || 'black'};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: ${props => props.justifyContent || 'center'};
	border: none;
`

const ImgStyled = styled.img`
	/* Добавьте стили для изображения, если это необходимо */
`
