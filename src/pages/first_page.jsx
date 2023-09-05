import React from 'react';

const FirstPage = () => {
    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const message = { data: randomNumber };
        localStorage.setItem('randomNumber', JSON.stringify(message)); // Сохраняем сообщение в localStorage
        // window.open('/second_page', '_blank'); // Открываем новую вкладку со второй страницей
    };

    return (
        <div>
            <h1>Первая страница</h1>
            <button onClick={handleClick}>Сгенерировать</button>
        </div>
    );
};

export default FirstPage;