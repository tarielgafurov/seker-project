import React from 'react'
import Register from './pages/register/Regster'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import InputSeker from './pages/InputSeker'
// import Layout from './components/Layout'

function App(props) {
	return (
		<Layout>
			{' '}
			<Routes>
				<Route path='/' element={''} />
				{/* <Route path='posts' element={<PostsPage />} /> */}
				{/* <Route path=':id' element={<PostPage />} /> */}
				{/* <Route path=':id/edit' element={<EditPostPage />} /> */}
				{/* <Route path='new' element={<AddPostPage />} /> */}
				<Route path='register' element={<Register />} />
				{/* <Route path='login' element={<LoginPage />} /> */}
			</Routes>
			<ToastContainer position='button-right' />
		</Layout>
	)
}

export default App
