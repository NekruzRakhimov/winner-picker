import React from 'react';

const IDsList = ({list}) => {
    return (
        <>
            {list.map((item, index) => (
                <div key={index} className="side-ids-list-item">{item.A}</div>
            ))}
        </>
    );
};

export default IDsList;