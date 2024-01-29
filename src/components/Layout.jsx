import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import Footer from './Footer'

function Layout({ children }) {
	return (
		<StyleLayout>
			<Header />
			{children}
			<Footer />
		</StyleLayout>
	)
}

export default Layout
const StyleLayout = styled.div`
	width: 100%;
	height: 800px;
	border: 1px solid #000;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`
