import {createStore, applyMiddleware, compose} from "redux";
import {thunk} from 'redux-thunk'
import reducer from './weatherReducer'


const composeEnchancer = window.__REDUX_DEVTOOLS_ETENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnchancer(applyMiddleware(thunk)))

export default store;