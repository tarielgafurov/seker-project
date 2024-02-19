import React from 'react'
import UserPhones from './UserPhones'
import styled from 'styled-components'
import FiltersWrapper from './filters/FiltersWrapper'

const UserPhonesWrapper = () => {
  return (
    <UserWrapper>
        <FiltersWrapper/>
        <UserPhones/>
    </UserWrapper>
  )
}

export default UserPhonesWrapper


const UserWrapper = styled.div`
    border: 2px solid red;
    margin-top: 120px;
    display: flex;
    justify-content: space-between;


`