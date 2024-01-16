import React, { useState } from 'react'
import ImagesWrapper from './ImagesWrapper'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import styled from 'styled-components'

function ImageAdd(props) {
	const [images, setImages] = useState([])

	const handleImage = e => {
		const file = e.target.files[0]
		const reader = new FileReader()

		reader.onloadend = () => {
			if (images.length < 3 && file) {
				setImages([...images, reader.result])
			}
		}

		if (file) {
			reader.readAsDataURL(file)
		}
	}

	const handleDeleteImage = index => {
		const updatedImages = images.filter((_, i) => i !== index)
		setImages(updatedImages)
	}

	return (
		<GlobalImg>
			{images.map((image, index) => (
				<ImagesWrapper
					key={index}
					src={image}
					handleDeleteImage={() => handleDeleteImage(index)}

					handleEditImage={newImage => {
						const updatedImages = [...images]
						updatedImages[index] = newImage
						setImages(updatedImages)
					}}
				/>
			))}
			{images.length < 3 && (
				<label
					htmlFor='upload-image'
					style={{
						backgroundColor: '#D9D9D9',
						width: '278px',
						height: '260px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: '10px',
					}}
				>
					{images.length < 3 && (
						<label htmlFor='upload-image'>
							<AddPhotoAlternateOutlinedIcon fontSize='large' />
						</label>
					)}
					<input
						style={{ display: 'none' }}
						id='upload-image'
						type='file'
						accept='image/*'
						onChange={handleImage}
					/>
				</label>
			)}
		</GlobalImg>
	)
}

export default ImageAdd

const GlobalImg = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	height: 300px;
	width: 90%;
`
