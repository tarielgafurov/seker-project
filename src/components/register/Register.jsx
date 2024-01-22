import React, { useState } from 'react';
import Input from '../../UI/input/Input';
import styled from 'styled-components';
import Button from '../../UI/button/Button';
import BlurredBackground from './BlurredBackground';

function Register(props) {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (value) => {
        setEmail(value);
    }

    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const handleRegisterClick = () => {
        console.log('Registration Details:', { email, phoneNumber, password });
        // Добавьте очистку состояний после обработки
        setEmail('');
        setPhoneNumber('');
        setPassword('');
    };

    return (
			<BlurredBackground>

        <ContainerRegister>
            <h1>Мой профиль</h1>
            <Input value={email} onChange={handleEmailChange} width={"369px"} borderRadius={"10px"} placeholder={"E-mail"} />
            <Input value={phoneNumber} onChange={handlePhoneNumberChange} width={"369px"} borderRadius={"10px"} placeholder={"Телефон номер"} />
            <Input value={password} onChange={handlePasswordChange} width={"369px"} borderRadius={"10px"} placeholder={"Пароль"} />
            <Button onClick={handleRegisterClick} width={"369px"} backgroundColor={"#FC3A74;"} borderRadius={"10px"}>
                Войти
            </Button>
        </ContainerRegister>
            </BlurredBackground>

    );
}

export default Register;

const ContainerRegister = styled.div`
    width: 568px;
    height: 523px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 30px;
    background: #D9D9D9;
    backdrop-filter: blur(8.5px); /* Добавляем backdrop-filter для размытия фона */

    h1 {
        width: 243px;
        height: 32px;
        flex-shrink: 0;
        color: #FC3A74;
        font-family: Montserrat;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`;
