import { legacy_createStore as createStore } from 'redux'
import { applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import accountReducer from "./reducers/accountReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    account: accountReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)