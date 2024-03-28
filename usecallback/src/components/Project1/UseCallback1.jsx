// useCallback

import React, { useCallback, useState } from 'react';

const UseCallback1 = () => {

    const[a,setA] = useState('Hello');

    const getA = useCallback(() => {
        setA('another'); 
    },[])

    return (
        <>
            <button onClick= {getA}>{ a }</button>
        </>
    )
}

export default UseCallback1
