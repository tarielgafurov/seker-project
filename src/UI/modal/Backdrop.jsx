import React from 'react'
import styled from 'styled-components'

const Backdrop = (props) => {
  return (
    <BackdropStyle onClick={props.onClick}>
    </BackdropStyle>
  )
}

export default Backdrop


const BackdropStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #00000064;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 40;
`