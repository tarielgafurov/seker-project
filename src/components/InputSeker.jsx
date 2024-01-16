import React from 'react'
import Input from '../UI/input/Input'
import ImageAdd from '../UI/imegePiker/ImegeAdd'
import styled from 'styled-components'

const InputSeker = () => {
    return (
        <div>
            <h1>Данные товары</h1>
            <div>
                <ImageAdd />
            </div>
            <div>
                <StyleInput>
                <span>Производитель</span>
                <select name="" id="">
                    <option value=""></option>
                    <option value="">Nokia</option>
                    <option value="">Appel</option>
                    <option value="">samsung</option>
                </select>
                    <Input />   
                </StyleInput>


            </div>
        </div>
    )
}

export default InputSeker

const StyleInput = styled.div`
 
display: flex;
justify-content: center;
flex-direction:column;
align-items:center;
    
`