// useReducer 

import React, { useReducer } from 'react';

const initialValue = 0 ;
const reducer = (state,action) => {
    if(action === 'increment') {
        return(state + 1);
    } else if(action === 'decrement') {
        return(state - 1);
    } else if(action === 'reset') {
        return(initialValue);
    } else {
        return (state);
    }
}

const UseReducer1 = () => {

    const[count,dispatch] = useReducer(reducer,initialValue);

    return (
        <>
            <p>Counnt : { count }</p>
            <button onClick= {() => {dispatch('increment')}}>Increment</button>
            <button onClick= {() => {dispatch('decrement')}}>Decrement</button>
            <button onClick= {() => {dispatch('reset')}}>Reset</button>
        </>
    )
}

export default UseReducer1























