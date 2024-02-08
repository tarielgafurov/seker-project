import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Button from '@mui/material/Button'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import MenuIcon from '@mui/icons-material/Menu'
const options = [
	'None',
	'Atria',
	'Callisto',
	'Dione',
	'Ganymede',
	'Hangouts Call',
	'Luna',
	'Oberon',
	'Phobos',
	'Pyxis',
	'Sedna',
	'Titania',
	'Triton',
	'Umbriel',
]

const ITEM_HEIGHT = 48

export default function CombinedMenu({ cont }) {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)

	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div>
			{cont === 'foo' && (
				<>
					<IconButton
						aria-label='more'
						id='long-button'
						aria-controls={open ? 'long-menu' : undefined}
						aria-expanded={open ? 'true' : undefined}
						aria-haspopup='true'
						onClick={handleClick}
					>
						<MoreVertIcon />
					</IconButton>
					<Menu
						id='long-menu'
						MenuListProps={{
							'aria-labelledby': 'long-button',
						}}
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						PaperProps={{
							style: {
								maxHeight: ITEM_HEIGHT * 4.5,
								width: '20ch',
							},
						}}
					>
						{options.map(option => (
							<MenuItem
								key={option}
								selected={option === 'Pyxis'}
								onClick={handleClose}
							>
								{option}
							</MenuItem>
						))}
					</Menu>
				</>
			)}

			{cont === 'bar' && (
				<PopupState variant='popover' popupId='demo-popup-menu'>
					{popupState => (
						<React.Fragment>
							<Button variant='contained' {...bindTrigger(popupState)}>
								<MenuIcon />
							</Button>
							<Menu {...bindMenu(popupState)}>
								<MenuItem onClick={popupState.close}>Профиль</MenuItem>
								<MenuItem onClick={popupState.close}>Мой аккаунт</MenuItem>
								<MenuItem onClick={popupState.close}>Выйти</MenuItem>
							</Menu>
						</React.Fragment>
					)}
				</PopupState>
			)}
		</div>
	)
}
