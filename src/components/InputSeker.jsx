import React, { useState } from 'react'
import Input from '../UI/input/Input'
import ImageAdd from '../UI/imegePiker/ImegeAdd'
import styled from 'styled-components'
import Select from '../UI/Select'
import RadioColor from '../UI/RadioColor'
import Button from '../UI/button/Button'


const InputSeker = () => {
    const [titleValue, setTitleValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [haractikValue, setHaractikValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const handleTitleChange = (value) => {
        setTitleValue(value);
    };
    const handlePriceChange = (value) => {
        setPriceValue(value);
    };

    const handleHaractikChange = (value) => {
        setHaractikValue(value);
    };
    const handleButtonClick = () => {
        setTitleValue('')
        setPriceValue('')
        setHaractikValue('')
        setInputValue('')
    };
    const handleSelectChange = (selectedValue) => {
        setInputValue(selectedValue);
    };
    return (
        <div>
            <h2>Данные товары</h2>
            <div>
                <ImageAdd />
            </div>
            <Container>
                <StyleInput>
                    <Container1>
                        <span>Производитель</span>
                        <Select width="300px" height="40px" onChange={handleSelectChange}>
                            <option value=""></option>
                            <option value="Nokia">Nokia</option>
                            <option value="Apple">Apple</option>
                            <option value="Samsung">Samsung</option>
                        </Select>
                    </Container1>
                    <Input padding={"7px"} borderRadius={"10px"} border={"1px"} width={"401px"}
                     value={inputValue} onChange={handleSelectChange} />
                </StyleInput>
                <div>
                    <Container2>
                        <span>Названия товара:</span>
                        <Input width={"401px"} padding={"7px"} borderRadius={"10px"} border={"1px"}
                         onChange={handleTitleChange}
                         value={titleValue} />
                    </Container2>
                </div>
            </Container>
            <Container3>
                <Container4>
                    <span>Характеристика товарa:</span>
                    <Input width={"401px"} padding={"7px"} borderRadius={"10px"} border={"1px"}
                     onChange={handleHaractikChange}
                     value={haractikValue} />
                </Container4>
                <Container5>
                    <span>Цена товара:</span>
                    <Input width={"401px"} padding={"7px"} borderRadius={"10px"} border={"1px"} 
                    onChange={handlePriceChange}
                    value={priceValue} />
                </Container5>
            </Container3>
            <StyleColor>
                <h4>Цвет</h4>
            </StyleColor>
            <StyleRadio>
                <RadioColor color={"black"} border={"1px solid"} />
                <RadioColor color={"white "} stroke={"2px solid "} />
                <RadioColor color={"red"} />
                <RadioColor color={"#00FFFF"} />
                <RadioColor color={"#FF1493"} />
                <RadioColor color={"blue"} />
            </StyleRadio>
            <StyleButton>
                <Button color={"white"} backgroundColor={"#FC3A74"} width={"256px"}
                 height={"47px"} borderRadius={"10px"}
                 onClick={handleButtonClick}>Добавить</Button>
            </StyleButton>
            <div>

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
    margin-bottom:5px;
    margin-right:150px;
    width: 260px;
    select{
        outline: none;
        border:none;
        width: 20px;
        height: 5px;
        option{
            border: none;
            outline:none; 
        }
    }
`
const StyleInput = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
align-items:center;   
`
const Container2 = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
    span{
    margin-bottom:5px;
    margin-right:290px;   
    }
`
const Container3 = styled.div`
    display: flex;
    justify-content: space-around;
    width: 1000px;
    margin: auto;
    margin-top:30px;
   span{
    margin-bottom:5px;
    margin-right:250px;       
   }
`
const Container4 = styled.div`
 display: flex;
 flex-direction:column;
`
const Container5 = styled.div`
display: flex;
flex-direction:column;
span{
   margin-right:320px;
}
`
const StyleRadio = styled.div`
    display: flex;
    width: 300px;
    margin-top:20px;
    margin-left:1000px;
    justify-content: space-around;   
`
const StyleButton = styled.div`
    margin-left:1000px;
    margin-top:50px;
`
const StyleColor = styled.div`
margin-top:50px;
margin-left:820px;
width: 400px;
`