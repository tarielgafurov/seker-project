import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import Spinner from '../../UI/Spinner';

const UserPhones = () => {

    const {isLodaing, userPhones} = useSelector((prevState)=>prevState.userPhones)
    console.log(userPhones);
  return (
    <UserPhonesWrapper>
      {isLodaing && <Spinner/>}  
      {
        userPhones.map((el)=>(
            <UserPhonesStyle>
                <div className='images'>
                    <img src={el.images.length>0 && el.images[0].image} alt="" />
                </div>
                <div>
                <h1>{el.title}</h1>
                <span>{el.description}</span>
                <span>{el.characteristics}</span>
                <span>{el.price}</span>
                </div>
            </UserPhonesStyle>
        ))
      }
    </UserPhonesWrapper>
  )
}

export default UserPhones

const UserPhonesWrapper = styled.div`
    display: flex;
    margin-top: 120px;
    flex-wrap: wrap;
    gap: 26px;
`
const UserPhonesStyle = styled.div`
    width: 270px;
    height: 364px;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 6px 1px;
    text-align: center;
    cursor: pointer;

    .images{
      width: 172px;
      height: 180px;
      border: 1px solid;
    }
    .images img{
      width: 170px;
      height: 180px;
    }
`