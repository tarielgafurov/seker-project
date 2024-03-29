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
	disabled,
	...props
}) {
	const onClickHandler = () => {
		onClick && onClick()
	}

	return (
		<ButtonStyled
			color={color}
			disabled={disabled}
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
	background-color: ${props => props.disabled ? "#b3b1b1" : "" || props.backgroundColor || '#9292EF'};
	font-size: ${props => props.fontSize || '16px'};
	padding: ${props => props.padding || '10px 30px'};
	border-radius: ${props => props.borderRadius || '16px'};
	color: ${props => props.disabled ? "#4a4a4a" : "" || props.color || 'black'};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: ${props => props.justifyContent || 'center'};
	border: ${(props)=> props.border || "none"};
	font-weight: 600;
`

const ImgStyled = styled.img`
	/* Добавьте стили для изображения, если это необходимо */
`
