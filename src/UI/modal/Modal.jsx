import React, { useEffect } from 'react'
import styled from 'styled-components'
import Button from '../button/Button'
import iconx from "../../Assets/icons/free-icon-x-656756.png"
import Backdrop from './Backdrop'

const Modal = ({onClose, trueClick, children, timerClose, variantModal}) => {

    // modalka ozu bir neche secunddan kiyin ochup kaluu uchun koldonulgan function
    // Al uchun propstan timerClose="2000" uwul syiaktuu kluch jana time beruu kerek
    useEffect(()=>{
        if(timerClose){
            const timer = setTimeout(()=>{
                console.log("mod");
                onClose()
            }, timerClose)
        }
    }, [timerClose, onClose])
  return (
    <>
      <Backdrop onClick={onClose}/>
        <ModalStyle variantModal={variantModal}>
        <img onClick={onClose} src={iconx} alt="x" /> 
        <b variant>{children}</b>
        {!variantModal && <>
            <hr />
            <ButtonsWrap>
                <Button onClick={onClose} borderRadius="8px" backgroundColor={"#cfc6c6"} padding={"12px"} width={"140px"} >Cancel</Button>
                <Button onClick={trueClick} borderRadius="8px" color={"#f0e0de"} backgroundColor={"#e82a09"} padding={"12px"} width={"140px"}>Delete</Button>
            </ButtonsWrap>
        </>}
        </ModalStyle>
    </>
  )
}

export default Modal

const ModalStyle = styled.div`
    display: inline-block;
    padding: ${(props)=> props.variantModal==="standart" ? "34px 40px 36px 26px" : "14px 30px"};
    border-radius: 14px;
    box-shadow: 0px 0px 10px 0.40px grey;
    margin-left: 30px;
    background-color: #faf2f2;
    background-color: ${(props)=> props.backgroundColor || "#faf2f2"};
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 50;

    img{
        width: 14px;
        position: absolute;
        right: 16px;
        top: ${(props)=> props.variantModal==="standart" ? "14px" : ""};
        width: ${(props)=> props.variantModal==="standart" ? "10px" : "14px"};
        cursor: pointer;
    }
    b{
        font-size: ${(props)=> props.variantModal==="standart" ? "30px" : "20px"};
    }
    hr{
        margin: 14px 0px;
        border: 0.5px solid #b7b4b4;
    }
`

const ButtonsWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width:300px;
`