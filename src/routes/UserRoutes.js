import React from 'react'
import { Route } from 'react-router-dom'
import UserPage from '../pages/UserPage'
import Apple15 from '../components/Apple15'

export const userRoutes = () => {
  return (
    <Route path='user' element={<UserPage/>}>
      <Route path='phones' element={<Apple15/>} />
    </Route>
  )
}

// export default UserRoutes
