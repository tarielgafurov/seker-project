import React from 'react'
import AdminHeader from '../components/admin/AdminHeader'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import AdminPhones from '../components/admin/AdminPhones'
import AddPhones from '../components/admin/AddPhones'

const AdminPage = () => {
  return (
    <AdminStyle>
      <AdminHeader/>
      <AdminPhones/>
      <AddPhones/>
      <Outlet/>
    </AdminStyle>
  )
}

export default AdminPage


const AdminStyle = styled.div`
    width: 1170px;
    position: relative;
    margin: auto;
`