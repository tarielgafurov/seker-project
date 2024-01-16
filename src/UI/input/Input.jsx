import React from 'react'
import styled from 'styled-components'

function Input({
	type,
	placeholder,
	width,
	borderRadius,
	padding,
	fontSize,
	color,
	onChange,
	...props
}) {
	const onChangeHandler = event => {
		if (onChange) {
			onChange(event.target.value)
		}
	}

	return (
		<InputStyled
			type={type}
			placeholder={placeholder}
			width={width}
			borderRadius={borderRadius}
			padding={padding}
			fontSize={fontSize}
			color={color}
			onChange={onChangeHandler}
			{...props}
		/>
	)
}

export default Input

const InputStyled = styled.input`
	width: ${props => props.width || '200px'};
	padding: ${props => props.padding || '10px'};
	border-radius: ${props => props.borderRadius || '5px'};
	font-size: ${props => props.fontSize || '16px'};
	color: ${props => props.color || 'black'};
	border: 1px solid #e9e4e4;
	outline: none;

	&::placeholder {
		color: #0e0d0d;
	}
`
