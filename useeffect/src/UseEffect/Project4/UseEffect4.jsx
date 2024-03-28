//useEffect with cleanup function

import React, { useEffect, useState } from 'react'

const UseEffect4 = () => {

    const[x,setX] = useState(0);
    const[y,setY] = useState(0);

    useEffect(() => {
        document.addEventListener('mousemove', submit);

        //Cleanup function 
        return () => {
            document.removeEventListener('mousemove', submit);
        }
    })

    const submit =(e) => {
        setX(e.x);
        setY(e.y);
    }

    return (
        <>
            <div>
                X: {x},<br />
                Y: {y}
            </div>
        </>
    )
}

export default UseEffect4