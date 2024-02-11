import { CircularProgress } from '@mui/material'
import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const Spinner = () => {
  return (
    <div>
      {
        createPortal(<SpinnerStyle><CircularProgress/></SpinnerStyle>, document.getElementById("circular"))
      }
    </div>
  )
}

export default Spinner

const SpinnerStyle = styled.div`
    text-align: center;
`