//useState with previous state

import React, { useState } from 'react'

const Project2 = () => {

    const[count,setCount] = useState(0);

    return (
        <>
            <p>{ count }</p>
            <button onClick= {() =>setCount(count+1)}>Increase</button>
            <button onClick= {() =>setCount(0)}>Reset</button>
            <button onClick= {() => setCount(count-1)}>Decrease</button>
        </>
    )
}

export default Project2
