import React from 'react'
import AdminHeader from '../components/admin/AdminHeader'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const AdminPage = () => {
  return (
    <AdminStyle>
      <AdminHeader/>
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