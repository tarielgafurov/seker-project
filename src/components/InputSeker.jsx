import React, { useState } from 'react'
import Input from '../UI/input/Input'
import ImageAdd from '../UI/imegePiker/ImegeAdd'
import styled from 'styled-components'
import Select from '../UI/Select'
import RadioColor from '../UI/RadioColor'
import Button from '../UI/button/Button'

const InputSeker = () => {
    const [manufacturer, setManufacturer] = useState("")  //производитель
    const [titles, setTitles] = useState("") //названия
    const [characteristic, setCharacteristic] = useState("") //характиристика
    const [price, setPrice] = useState("") //цена товара

    console.log(price);

    const manufacturerChange = (e) => {
        setManufacturer(e.target.value)
        console.log(manufacturer);
    }
    const titleChange = (e) => {
        setTitles(e.target.value)
        console.log(titles);
    }
    const characteristicChange = (e) => {
        setCharacteristic(e.target.value)
        console.log(characteristic);
    }
    const priceChange = (e) => {
        setPrice(e.target.value)
        // console.log(price);
    }
    return (
        <div>
            <h1>Данные товары</h1>
            <div>
                <ImageAdd />
            </div>
            <Container>
                <StyleInput>
                    <Container1>
                        <span>Производитель</span>
                        <select name="" id="" value={manufacturer} onChange={manufacturerChange}>
                            <option value=""></option>
                            <option value="">Nokia</option>
                            <option value="">Appel</option>
                            <option value="">samsung</option>
                        </select>
                    </Container1>

                    <Input padding={"7px"} borderRadius={"10px"} border={"1px"} width={"401px"} />

                </StyleInput>
                <div>

                    <Input2>
                        <span>Названия товара:</span>
                        <Input onChange={titleChange} width={"401px"} padding={"7px"} borderRadius={"10px"} border={"1px"} />
                    </Input2>

                </div>
            </Container>
            <Container3>
                <Container4>
                    <span>Характеристика товаров</span>
                    <Input onChange={characteristicChange} width={"401px"} padding={"7px"} borderRadius={"10px"} border={"1px"} />
                </Container4>
                <Container5>
                    <span>Цена товара:</span>
                    <Input onChange={priceChange} width={"401px"} padding={"7px"} borderRadius={"10px"} border={"1px"} />
                </Container5>
            </Container3>

            <div>
                    <span>Цвет</span>
                </div>

            <StyleRadio>
               <RadioColor/> 
               <RadioColor/>
               <RadioColor/>
               <RadioColor/>
               <RadioColor/>
            </StyleRadio>
            <div>
                <Button/>
            </div>
        </div>
    )
}

export default InputSeker

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 1000px;
    margin: auto;
`
const Container1 = styled.div`
    display: flex;
    select{
        width: 20px;
    }
    span{
    
    }
`

const StyleInput = styled.div`
 
display: flex;
justify-content: center;
flex-direction:column;
align-items:center;
    
`
const Input2 = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
`
const Container3 = styled.div`
    display: flex;
    justify-content: space-around;
    width: 1000px;
    margin: auto;
    margin-top:30px

`
const Container4 = styled.div`
 display: flex;
 flex-direction:column;

`
const Container5 = styled.div`
display: flex;
flex-direction:column;
`
const StyleRadio = styled.div`
    display: flex;
    width: 300px;
    margin-top:50px;
    margin-left:800px;
    justify-content: space-around;
`