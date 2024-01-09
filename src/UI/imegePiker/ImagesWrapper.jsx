import React, { useState } from 'react'
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete'

function ImagesWrapper({ src, handleDeleteImage }) {
	const [hovered, setHovered] = useState(false)

	const handleMouseEnter = () => {
		setHovered(true)
	}

	const handleMouseLeave = () => {
		setHovered(false)
	}

	const handleDelete = () => {
		handleDeleteImage()
	}

	return (
		<StyleCon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<StyledImage src={src} alt='Uploaded' />
			{hovered && (
				<DeleteIconContainer>
					<DeleteIcon onClick={handleDelete} />
				</DeleteIconContainer>
			)}
		</StyleCon>
	)
}

export default ImagesWrapper

const StyledImage = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 10px;
`

const StyleCon = styled.div`
	display: flex;
	position: relative;
	width: 223px;
	height: 240px;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	border-radius: 10px;
	background-color: #d9d9d9;
`

const DeleteIconContainer = styled.div`
	position: absolute;
	top: 205px;

	right: 5px;
	cursor: pointer;
	display: none;

	${StyleCon}:hover & {
		display: block;
	}
`
