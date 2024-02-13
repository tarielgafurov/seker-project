import React, { useEffect } from 'react'
import UserHeader from '../components/user/UserHeader'
import { useLocation, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { getRequestUserPagePhones } from '../store/slices/userPhonesSlice'
import UserPhones from '../components/user/UserPhones'
import Register from '../components/registr/Registr'

const UserPage = () => {
  const dispatch = useDispatch()
  const [search] = useSearchParams()
  const location = useLocation()


  useEffect(()=>{
    dispatch(getRequestUserPagePhones())
  },[dispatch])
  useEffect(()=>{
    localStorage.removeItem("token")
  },[])
  return (
    <UserPageStyle>
        {search.get("registr") && <RegisterWrapper>
          <Register/>
        </RegisterWrapper>}
        <UserHeader/>
        <UserPhones/>
    </UserPageStyle>
  )
}

export default UserPage


const UserPageStyle = styled.div`
  width: 1170px;
  position: relative;
  margin: auto;
`
const RegisterWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 40;
`