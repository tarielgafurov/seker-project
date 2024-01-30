import React from 'react'
import styled from 'styled-components'

function Button({
	color,
	width,

	border,
	height,

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

			border={border}
		    height={height}

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
	border: ${props => props.border || ''};
	width: ${props => props.width || ''};
	height: ${props => props.height || ''};

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
	

