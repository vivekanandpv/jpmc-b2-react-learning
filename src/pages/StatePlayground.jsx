import React from 'react';

//  reducer is a pure function
//  https://en.wikipedia.org/wiki/Pure_function

//  action tells the reducer about the change to be applied
//  action usually has the structure: {type: 'actionType', payload: ...}
const sampleReducer = (state, action) => {
    switch (action.type) {
        case 'updateFirstName': {
            //    using the spread operator for cloning
            //    this is not a recommended approach
            //    consider using immer.js
            const newState = { ...state };
            newState.firstName = action.payload; //  updating the cloned state, not the original
            return newState;
        }
        case 'updateLastName': {
            const newState = { ...state };
            newState.lastName = action.payload;
            return newState;
        }
        //    if the action type is not supported in the reducer
        //    return the old state
        default:
            return state;
    }
};

const StatePlayground = () => {
    const initialState = {
        firstName: 'Raman',
        lastName: 'K V',
    };

    const [state, dispatch] = React.useReducer(sampleReducer, initialState);

    const changeFirstName = () => {
        const action = {
            type: 'updateFirstName',
            payload: 'Rajendra',
        };
        dispatch(action);
    };

    const changeLastName = () => {
        const action = {
            type: 'updateLastName',
            payload: 'Kumar',
        };
        dispatch(action);
    };

    return (
        <>
            <h3>Sample Component</h3>
            <hr />
            <p>
                First Name: {state.firstName}; Last Name: {state.lastName}
            </p>

            <button className='btn btn-primary me-4' onClick={changeFirstName}>Change First Name</button>
            <button className='btn btn-primary' onClick={changeLastName}>Change Last Name</button>
        </>
    );
};

export default StatePlayground;