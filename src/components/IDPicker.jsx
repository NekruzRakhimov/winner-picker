import React, {useEffect, useState} from 'react';
import Ball from "./Ball";

const getDigitsArray = (number) => {
    let digits = [];
    let numString = number.toString();

    for (let i = 0; i < numString.length; i++) {
        digits.push(parseInt(numString.charAt(i)));
    }

    return digits;
};

const IDPicker = ({list, onLoaded}) => {
    const [randomItem, setRandomItem] = useState(0);
    const [generatedNumbers, setGeneratedNumbers] = useState([]);

    useEffect(() => {
        if (typeof onLoaded == "function") {
            onLoaded(generatedNumbers)
        }
    }, [generatedNumbers]);

    useEffect(() => {
        const message = {data: randomItem};
        localStorage.setItem('randomNumber', JSON.stringify(message));
    }, [randomItem]);



    const generateRandomItem = () => {
        if (list.length > 0 && list.length - generatedNumbers.length > 0) {
            const availableData = list.filter((item) => !generatedNumbers.includes(item.A)); // Filter out already generated numbers
            if (availableData.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableData.length);
                const randomItem = availableData[randomIndex].A;
                setRandomItem(randomItem);
                setGeneratedNumbers([...generatedNumbers, randomItem]); // Save the generated number
            }
            // const randomNumber = Math.floor(Math.random() * 100) + 1;
            // Сохраняем сообщение в localStorage
            // window.open('/second_page', '_blank'); // Открываем новую вкладку со второй страницей
            console.log(generatedNumbers)
        }
    };

    let randomItemNumbers = getDigitsArray(randomItem)

    return (
        <>
            <div className="id-picker-content-main-items">
                {randomItemNumbers.map((v, i) =>
                    <Ball number={v}/>
                )}
            </div>
            <div className="id-picker-content-main-btn-area">
                <button onClick={generateRandomItem} className="id-picker-content-main-btn button-19">Сгенерировать
                </button>
            </div>
        </>
    );
};

export default IDPicker;