import React from 'react'
import { Route } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import AddPhones from '../components/admin/AddPhones'

const adminRoutes = () => {
  return (
    <Route path='/admin' element={<AdminPage/>} >
      <Route path='phones' element={<AddPhones/>} />
    </Route>
  )
}

export default adminRoutes
