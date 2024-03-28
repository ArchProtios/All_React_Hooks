//UseRef

import React, { useRef } from 'react'

const UseRef2 = () => {

    const InputRef = useRef(null);

    const submit = () => {
        InputRef.current.focus();
    }

    return (
        <>
            <input type="text" ref= {InputRef}/>
            <button onClick= {submit}>Click Here</button>
        </>
    )
}

export default UseRef2
