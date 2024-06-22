//useState with array 

import React, { useState } from 'react';

const Project4 = () => {
    const [item, setItem] = useState([]);

    const submit = () => {
        setItem([...item, { 
            id: item.length,
            value: Math.floor(Math.random() * 10) + 1,
        }]);
    };

    return (
        <>
            <button onClick={submit}>Add a number: </button>
            <ul>
                {item.map(items => (
                    <li key={items.id}>{items.value}</li>
                ))}
            </ul>
        </>
    );
};

export default Project4;



