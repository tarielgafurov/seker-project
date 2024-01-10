import React, { useState } from 'react'
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import CachedIcon from '@mui/icons-material/Cached'
import { CSSTransition } from 'react-transition-group' // Импорт CSSTransition

function ImagesWrapper({ src, handleDeleteImage, handleEditImage }) {
	const [hovered, setHovered] = useState(false)
	const [showEditOptions, setShowEditOptions] = useState(false)

	const handleMouseEnter = () => {
		setHovered(true)
	}

	const handleMouseLeave = () => {
		setHovered(false)
	}

	const handleDelete = () => {
		handleDeleteImage()
	}
	const handlerConteyner = () => {
		setShowEditOptions(!showEditOptions)
	}
	const handleEdit = () => {
		const input = document.createElement('input')
		input.type = 'file'
		input.accept = 'image/*'

		input.onchange = e => {
			const file = e.target.files[0]
			const reader = new FileReader()

			reader.onloadend = () => {
				const updatedImage = reader.result
				handleEditImage(updatedImage)
			}

			if (file) {
				reader.readAsDataURL(file)
			}
		}

		input.click()
	}

	return (
		<StyleCon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<StyledImage src={src} alt='Uploaded' />
			<CSSTransition
				in={hovered && showEditOptions}
				timeout={300}
				classNames='edit-options'
				unmountOnExit
			>
				<DeleteIconContainer>
					<DeleteIcon onClick={handleDelete} />
					<CachedIcon onClick={handleEdit} />
				</DeleteIconContainer>
			</CSSTransition>
			<EditIconContainer onClick={handlerConteyner}>
				<CreateIcon />
			</EditIconContainer>
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
	background-color: #d9d9d9;
`

const DeleteIconContainer = styled.div`
	position: absolute;
	height: 100px;
	top: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	gap: 10px;
	padding: 10px;
	background-color: rgba(255, 255, 255, 0.9);
	border-radius: 5px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	&.edit-options-enter {
		opacity: 0;
		transform: translateY(-10px);
	}
	&.edit-options-enter-active {
		opacity: 1;
		transform: translateY(0);
		transition: opacity 300ms, transform 300ms;
	}
	&.edit-options-exit {
		opacity: 1;
		transform: translateY(0);
	}
	&.edit-options-exit-active {
		opacity: 0;
		transform: translateY(-10px);
		transition: opacity 300ms, transform 300ms;
	}
`

const EditIconContainer = styled.div`
	position: absolute;
	bottom: 10px;
	right: 10px;
	cursor: pointer;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.2);
	}
`
