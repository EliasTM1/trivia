/*
* The reducer is a function that returns state 
*/

const accountReducer = (state = 0, action) => {
    switch (action.type) {
        case 'deposit':
            return state + action.paylload;
        case 'withdraw':
            return state - action.paylload;
        default:
            return state;
    }
}

export default accountReducer