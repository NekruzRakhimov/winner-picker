import React, {useEffect, useState} from 'react';

const PickedIDsList = ({list}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(list);
    }, [list]);

    return (
        <>
            {
                list.map((item, index) => (
                    <div key={index} className="side-ids-list-item">{item}</div>
                ))
            }
        </>
    );
};

export default PickedIDsList;