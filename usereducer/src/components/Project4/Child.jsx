// import React from 'react';
// import { UseContext } from '../Project4/UseReducer4';

// const Child = () => {
//     return (
//         <>
//             <UseContext.Consumer>
//                 {
//                     (input) => {
//                         return (
//                             <div>Hello {input}</div>
//                         )
//                     }
//                 }
//             </UseContext.Consumer>
//         </>
//     )
// }

// export default Child;











import React from 'react';
import { MyContextProvider, useMyContext } from '../Project4/UseReducer4';

const Counter = () => {
    const { state, dispatch } = useMyContext();

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
};

const Child = () => {
    return (
        <MyContextProvider.Consumer>
            <Counter />
        </MyContextProvider.Consumer>
    );
};

export default Child;
