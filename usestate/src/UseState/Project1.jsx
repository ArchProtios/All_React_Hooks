//useState Hooks

import React, { useState } from 'react'

const Project1 = () => {
    
    const[count,setCount] = useState(0);

    function submit() {
        const val = count;
        setCount(val+1);
    }

    return (
        <>
            <p>{ count }</p>
            <button onClick= {submit}>Click Here</button>
        </>
    )
}

export default Project1;