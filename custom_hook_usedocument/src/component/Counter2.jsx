import React, { useEffect, useState }  from 'react';
import Coustom_Hooks from './Coustom_Hooks';

const Counter2 = () => {

    const[count,setCount] = useState(0);
    
    // useEffect(() => {
    //     document.title = `Clicked ${count} times`
    // },[count]);

    Coustom_Hooks(count);

    return (
        <>
            <p>{ count }</p>
            <button onClick= {() => {setCount(count+1)}}>Clicked : { count }</button>
        </>
    )
}

export default Counter2;
