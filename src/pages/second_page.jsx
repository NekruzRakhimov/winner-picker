import React, { useEffect, useState } from 'react';
import Ball from "../components/Ball";

const getDigitsArray = (number) => {
    let digits = [];
    if (number !== null) {
        let numString = number.toString();

        for (let i = 0; i < numString.length; i++) {
            digits.push(parseInt(numString.charAt(i)));
        }
    }

    return digits;
};

const SecondPage = () => {
    const [randomNumber, setRandomNumber] = useState(0);

    const handleMessage = (_e) => {
        setRandomNumber(0);

        console.log(_e)
        const message = JSON.parse(localStorage.getItem('randomNumber')); // Получаем сообщение из localStorage
        if (message) {
            setRandomNumber(message.data);
            // localStorage.removeItem('randomNumber'); // Удаляем сообщение из localStorage
        }
    };

    useEffect(() => {

        handleMessage()
        // const handleMessage = (event) => {
        //     const message = JSON.parse(localStorage.getItem('randomNumber')); // Получаем сообщение из localStorage
        //     if (message) {
        //         setRandomNumber(message.data);
        //         localStorage.removeItem('randomNumber'); // Удаляем сообщение из localStorage
        //     }
        // };

        window.addEventListener('storage', handleMessage); // Слушаем события хранилища

        // return () => {
        //     window.removeEventListener('storage', handleMessage);
        // };
    }, []);

    let randomItemNumbers = getDigitsArray(randomNumber)

    return (
        <div>
            <div className="id-picker-content-main-items">
                {randomItemNumbers.map((v, i) =>
                    <Ball number={v}/>
                )}
            </div>
        </div>
    );
};

export default SecondPage;