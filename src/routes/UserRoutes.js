import React from 'react'
import { Route } from 'react-router-dom'
import UserPage from '../pages/UserPage'
import Apple15 from '../components/user/Apple15'

export const userRoutes = () => {
 
  return (
    <Route path='/' element={<UserPage/>}>
      <Route path='phones' element={<Apple15/>} />
      <Route path='innerPage' element={<h1>tuyf</h1>} />
    </Route>
  )
}

// export default UserRoutes
