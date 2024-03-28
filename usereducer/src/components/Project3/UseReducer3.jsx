// Multiple useReducers

import React, { useReducer } from 'react';

const countInitialValue = 0 ;
const toogleInitialValue = true;

const countReducer = (state,action) => {
    if(action === 'increment') {
        return (state + 1);
    } else if(action === 'decrement') {
        return (state - 1);
    } else if(action === 'reset') {
        return (countInitialValue);
    } else {
        return (state);
    }
};

const toogleReducer = (toogle,action) => {
    if(action === 'true') {
        return ("Yeah");
    } else if(action === 'false') {
        return ("Nooo");
    } else {
        return (toogle);
    }
}

const UseReducer3 = () => {

    const[count, dispatchCount] = useReducer(countReducer,countInitialValue);
    const[toogle, dispatchToogle] = useReducer(toogleReducer,toogleInitialValue);   

    return (
        <>
            <div>
                <p>{ count }</p>
                <button onClick={() => {dispatchCount('increment')}}>Increment</button>
                <button onClick={() => {dispatchCount('decrement')}}>Decrement</button>
                <button onClick={() => {dispatchCount('reset')}}>Reset</button>
            </div>
            <div>
                <p>{ toogle }</p>
                <button onClick={() => {dispatchToogle('true')}}>True</button>
                <button onClick={() => {dispatchToogle('false')}}>False</button>
            </div>
        </>
    );
};

export default UseReducer3
