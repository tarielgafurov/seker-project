import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import Footer from './Footer'
import AppRouter from '../routes/AppRouter'

function Layout() {
	return (
		<StyleLayout>
			<Header />
			<StyledMain>
				<AppRouter />
			</StyledMain>
			<Footer />
		</StyleLayout>
	)
}

export default Layout
const StyleLayout = styled.div`
	width: 100%;
	height: 1900px;
	border: 1px solid #000;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`

const StyledMain = styled.div`
	display: grid;
	grid-auto-rows: 150px;
	grid-gap: 10px;
	padding: 10px;
	margin-top: 300px;
`
