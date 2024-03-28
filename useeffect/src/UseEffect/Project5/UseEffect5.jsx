import React, { useEffect, useState } from 'react'

const UseEffect5 = () => {

    const[count,setCount] = useState(0);

    const tick = () => {
        setCount( count + 1 );
    }   

    useEffect(() => {
        const interval = setInterval(tick,1000);

        //cleanup function
        return () => {
            clearInterval(interval);
        }
    })

    return (
        <>
            <div>
                {count}
            </div>
        </>
    )
}

export default UseEffect5
