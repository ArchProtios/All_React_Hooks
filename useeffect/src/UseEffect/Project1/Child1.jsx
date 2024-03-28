import React, { useEffect, useState } from 'react'

const Child1 = () => {

    const[count,setCount] = useState(0);

    useEffect(() => {
        document.title = `You have clicked ${count} times`;
    })

    const submit = () => {
        // const val = ++count;
        setCount(count+1);
    }

    return (
        <>
            <button onClick= { submit }>Clicked here {count} times...</button>
        </>
    )
}

export default Child1
