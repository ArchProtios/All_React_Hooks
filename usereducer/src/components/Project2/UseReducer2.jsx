// complex useReducer with action

import React, { useReducer } from 'react'

const initialValue = {
    firstReducer: 0,
};

const reducer = (state,action) => {
    if(action.type === 'increment') {
        return({firstReducer: state.firstReducer + action.value});
    } else if (action.type === 'decrement') {
        return({firstReducer: state.firstReducer - action.value});
    } else if(action.type === 'reset') {
        return({firstReducer: action.value});
    } else {
        return({state});
    }
}

const UseReducer2 = () => {

    const[count,dispatch] = useReducer(reducer,initialValue);
    
    return (
        <>
            <p>Count : {count.firstReducer}</p>
            <button onClick={() => {dispatch({type: 'increment',value: 1})}}>Increment</button>
            <button onClick={() => {dispatch({type: 'decrement',value: 1})}}>Decrement</button>
            <button onClick={() => {dispatch({type: 'reset',value: 0})}}>Reset</button>
        </>
    )
}

export default UseReducer2
