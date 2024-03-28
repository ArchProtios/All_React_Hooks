import React, { useRef } from 'react'

const UseRef1 = () => {

    const ref = useRef(0);
    const Btnref = useRef(null);

    const submit = () => {
        ref.current = ref.current + 1 ;
        console.warn(`${ ref.current }`);
        alert(`${ref.current}`);
    }

    return (
        <>
            <button onClick={submit} ref={Btnref}>Click Here</button>
        </>
    )
}

export default UseRef1;
