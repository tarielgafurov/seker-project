import React from 'react'
import { Routes } from 'react-router-dom'
import { userRoutes } from './UserRoutes'
import adminRoutes from './AdminRoutes'

const AppRoutes = () => {
  return (
    <Routes>
        {/* <Route path='ttt' element={"dtfycvuivbobob"} /> */}
        {userRoutes()}
        {adminRoutes()}
    </Routes>
  )
}

export default AppRoutes
