import React, { useEffect, useState } from 'react';

const Counter1 = () => {

    const[count,setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked ${count} times`
    },[count]);

    return (
        <>
            <p>{ count }</p>
            <button onClick= {() => {setCount(count+1)}}>Clicked : { count }</button>
        </>
    )
}

export default Counter1;
