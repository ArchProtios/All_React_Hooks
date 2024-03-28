//useCallback using dependencies

import React, { useCallback, useState } from 'react';

const UseCallback2 = () => {

    const[a,setA] = useState('Hello');
    const[count,setCount] = useState(0);

    // const getA = () => {
    //     const ko = count + 1;
    //     setCount(ko);
    //     setA('another' + ko);
    // }

    const getA = useCallback(() => {
        const ko =  count+1;
        setCount(ko);
        setA('another' + ko);
    },[count]);

    return (
        <>
            <button onClick= {getA}>{ a }</button>
        </>
    )
}

export default UseCallback2
