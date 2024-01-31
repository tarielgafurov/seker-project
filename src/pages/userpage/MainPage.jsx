import React from 'react'
import styled from 'styled-components'
import Heart from '../../UI/Heart'

function MainPage({ state }) {
	console.log(state)
	return <StyledMain></StyledMain>
}

export default MainPage

const StyledMain = styled.div`
	width: 730px;
	height: 780px;
	display: flex;
	padding: 10px;
	align-items: center;
	justify-content: space-evenly;

	div {
		display: flex;
		justify-content: space-evenly;
		padding: 10px;
		flex-wrap: wrap;
	}
	img {
		width: 102px;
		height: 76px;
		flex-shrink: 0;
		border: 1px solid #000;
	}
`

const StyledHeart = styled.div``
