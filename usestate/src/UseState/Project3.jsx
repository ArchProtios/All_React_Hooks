//useState with object 

import React, { useState } from 'react'

const Project3 = () => {

    const[name,setName] = useState({firstName: '', lastName: ''});
    return (
        <>
            <input type="text" value= {name.firstName} onChange={(e) => setName({...name , firstName: e.target.value})} />
            <input type="text" value= {name.lastName} onChange={(e) => setName({...name , lastName: e.target.value})} />
            <p>Your first name is {name.firstName}</p>
            <p>Your last name is {name.lastName}</p>
        </>
    )
}

export default Project3
