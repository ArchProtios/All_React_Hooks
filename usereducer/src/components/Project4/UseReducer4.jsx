// import React from 'react';
// import Child from './Child';

// export const UseContext = React.createContext();

// const UseReducer4 = () => {

//     return (
//         <>
//             <UseContext.Provider value= {'Parimal'}>
//                 <Child />
//             </UseContext.Provider>
//         </>
//     )
// }

// export default UseReducer4;









import React, { createContext, useContext, useReducer } from 'react';

// Step 1: Create a context
const MyContext = createContext();

// Step 2: Define initial state and reducer function
const initialState = {
    count: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        default:
            return state; // Default action, return current state
    }
};

// Step 3: Create a provider component to wrap your app
const MyContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContextProvider;

// Step 4: Create a custom hook to access the context
export const useMyContext = () => useContext(MyContext);
