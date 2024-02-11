import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { userRoutes } from './UserRoutes'

const AppRoutes = () => {
  return (
    <Routes>
        {/* <Route path='ttt' element={"dtfycvuivbobob"} /> */}
        {userRoutes()}
    </Routes>
  )
}

export default AppRoutes
