import React from 'react'
import styled from 'styled-components'

const Users = () => {
  return (
    <div>
    <InsStyle>User</InsStyle>   
    <StyleConteiner>
         <div>
        <h4>Имя:</h4>
        <h4>Номер телефона:</h4> 
        <h4>Email:</h4> 
        <h4>Password:</h4>
        </div>
        <div>
         <span>Seker</span> 
        <span>+996(000)000-000</span> 
        <span>user@gmail.com</span> 
        <span>ItDoorSuper</span> 

        </div>
    </StyleConteiner>
    </div>
  
  )
}

export default Users

const InsStyle = styled.ins`
        font-size: 20px;    
`

const StyleConteiner = styled.div`
    display: flex;
    width: 553px;
    height: 325px;
    justify-content:center;
    margin:auto;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 2px 2px 16px 0px #C1C1C1;
 

    div{
        display: flex;
        height: 100%;
        justify-content: space-evenly;
        align-items: start;
        flex-direction:column;


        span{
            color: #000;
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 200;
line-height: normal;
        }
        h4{
           color: #000;
           font-size: 20px;

        }
        
    }
`