import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/system'
import { pink } from '@mui/material/colors'

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
	color: pink[800],
	'&.Mui-checked': {
		color: pink[600],
	},
}))

const CheckBox = ({ children, color, onChange }) => {
	const handleChange = event => {
	
		console.log(color)

		onChange && onChange(event)
	}

	return (
		<div>
			<StyledCheckbox
				defaultChecked
				onChange={handleChange}
				sx={{
					color: pink[800],
					'&.Mui-checked': {
						color: pink[600],
					},
				}}
			/>
			{children}
		</div>
	)
}

export default CheckBox
