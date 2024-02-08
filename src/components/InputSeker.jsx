import React, { useState } from 'react';
import Input from '../UI/input/Input';
import ImageAdd from '../UI/imegePiker/ImegeAdd';
import styled from 'styled-components';
import Select from '../UI/Select';
import RadioColor from '../UI/RadioColor';
import Button from '../UI/button/Button';
import CheckBox from '../UI/checkout/CheckBox';
import { useDispatch } from 'react-redux'; // Импорт функции useDispatch
import { fetchUserData } from '../store/features/inputSlice/inputSlice';

const InputSeker = () => {
    const [titleValue, setTitleValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [haractikValue, setHaractikValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [isCheckedNew, setIsCheckedNew] = useState(false);
    const [isCheckedUsed, setIsCheckedUsed] = useState(false);
    const [errorFields, setErrorFields] = useState({
        title: false,
        price: false,
        haractik: false,
        // producer: false,
    });

    const dispatch = useDispatch(); // Использование функции useDispatch для получения функции диспетчера

    const handleTitleChange = (value) => {
        setTitleValue(value);
        setErrorFields((prevState) => ({ ...prevState, title: !value.trim() }));
    };

    const handlePriceChange = (value) => {
        setPriceValue(value);
        setErrorFields((prevState) => ({ ...prevState, price: !value.trim() }));
    };

    const handleHaractikChange = (value) => {
        setHaractikValue(value);
        setErrorFields((prevState) => ({ ...prevState, haractik: !value.trim() }));
    };

    const handleSelectChange = (selectedValue) => {
        setInputValue(selectedValue);
        setErrorFields((prevState) => ({ ...prevState, producer: !selectedValue.trim() }));
    };

    const handleButtonClick = async () => {
        dispatch(fetchUserData(titleValue, priceValue, haractikValue,
            inputValue,
            isCheckedNew,
            isCheckedUsed,
            errorFields));
    };

    const handleCheckboxChange = (type) => {
        if (type === 'new') {
            setIsCheckedNew(!isCheckedNew);
        } else if (type === 'used') {
            setIsCheckedUsed(!isCheckedUsed);
        }
    };

    const isButtonDisabled = Object.values(errorFields).some((field) => field)
        || !titleValue || !priceValue || !haractikValue || !inputValue;
    return (
        <GlavDiv>
            <h2>Данные товары</h2>
            <>
                <ImageAdd />
            </>
            <Container>
                <StyleInput>
                    <Container1>
                        <span>Производитель</span>
                        <Select width="300px" height="40px" onChange={handleSelectChange}>
                            <option value=""></option>
                            <option value="Apple">Apple</option>
                            <option value="Nokia">Nokia</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Xiaomi">Xiaomi</option>
                        </Select>
                    </Container1>
                    <Input padding={"7px"} borderRadius={"10px"} border={"1px"} width={"401px"}
                        value={inputValue} onChange={handleSelectChange} />
                </StyleInput>
                <>
                    <Container2>
                        <span>Названия товара:</span>
                        <Input width={"401px"} padding={"7px"} borderRadius={"10px"} border={"1px"}
                            onChange={handleTitleChange}
                            value={titleValue} />
                    </Container2>
                </>
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
            <StyleDiv1>
                <GlavDiv>
                    <StyleChekBox>
                        <ChekStyle1>
                            <CheckBox color="blue" onChange={() => handleCheckboxChange('new')} checked={isCheckedNew} />
                            <h4>Новый</h4>
                        </ChekStyle1>
                        <ChekStyle2>
                            <CheckBox color="red" onChange={() => handleCheckboxChange('used')} checked={isCheckedUsed} />
                            <h4>Б/У</h4>
                        </ChekStyle2>
                    </StyleChekBox>
                </GlavDiv>
                <StyleDiv2>
                    <StyleColor>
                        <h4>Цвет</h4>
                    </StyleColor>
                    <StyleRadio>
                        <RadioColor color={"black"} border={"1px solid"} />
                        <RadioColor color={"white "} border={"2px solid "} />
                        <RadioColor color={"red"} />
                        <RadioColor color={"#00FFFF"} />
                        <RadioColor color={"#FF1493"} />
                        <RadioColor color={"blue"} />
                    </StyleRadio>
                    <StyleButton>
                        <Button color={"white"} backgroundColor={"#FC3A74"} width={"256px"}
                            height={"47px"} borderRadius={"10px"}
                            onClick={handleButtonClick} disabled={isButtonDisabled}>
                            Добавить
                        </Button>
                    </StyleButton>
                </StyleDiv2>
            </StyleDiv1>
        </GlavDiv>
    )
}
export default InputSeker

const GlavDiv = styled.div`
    h2{
        width: 205px;
        height: 30px;
        margin: auto;
    }
`
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
        width: 15px;
        height: 15px;
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
    margin-top:20px;
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
    margin-top:20px;
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
const StyleDiv1 = styled.div`
    display: flex;
`
const StyleDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-left:410px;
`
const StyleChekBox = styled.div`
    margin-top:20px;
    margin-left:300px;
`
const ChekStyle1 = styled.div`
    display: flex;
    height: 24px;
    width: 98px;
    align-items:center; 
`
const ChekStyle2 = styled.div`
    display: flex;
    height: 24px;
    margin-top:10px; 
    width: 98px;
    align-items:center;
`
const StyleRadio = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-around;   
`
const StyleButton = styled.div`
    margin-top:50px;
`
const StyleColor = styled.div`
    margin-right:250px;
`