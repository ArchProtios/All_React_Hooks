import React, { useEffect, useState } from 'react'

const Child1 = () => {

    const[count,setCount] = useState(0);

    useEffect(() => {
        if(count<1) {
            document.title = ``;
        } else {
            document.title = `CLicked ${count}`;
        }
    })

    function submit() {
        setCount(count+1);
    }

    return (
        <>
            <button onClick= {submit}>Clicked Here { count }</button>
        </>
    )
}

export default Child1
