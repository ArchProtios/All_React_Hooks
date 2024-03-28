import React, { useEffect, useState } from 'react'

const UseEffect3 = () => {

    const[x,setX] = useState(0);
    const[y,setY] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', a);
    })

    function a(e) {
        // setX(e.x);
        // setY(e.y);

        //or

        // setX(e.clientX);
        // setY(e.clientY);
    }

    return (
        <>
            <div>
                X: {x}, <br />
                Y: {y}
            </div>
        </>
    )
}

export default UseEffect3
