import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

const Hearts = ({ onChange }) => {
	const handleFavoriteChange = event => {
		console.log('Favorite checkbox checked:', event.target.checked)
		onChange && onChange('favorite', event.target.checked)
	}

	const handleBookmarkChange = event => {
		console.log('Bookmark checkbox checked:', event.target.checked)
		onChange && onChange('bookmark', event.target.checked)
	}

	const checkboxStyle = {
		color: '#FC3A74', // Задайте желаемый цвет для чекбокса
	}

	return (
		<div>
			<Checkbox
				icon={<FavoriteBorder />}
				checkedIcon={<Favorite />}
				onChange={handleFavoriteChange}
				style={checkboxStyle}
			/>
			<Checkbox
				icon={<BookmarkBorderIcon />}
				checkedIcon={<BookmarkIcon />}
				onChange={handleBookmarkChange}
			/>
		</div>
	)
}

export default Hearts
