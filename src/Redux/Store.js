import {applyMiddleware, legacy_createStore} from 'redux'
import {logger} from 'redux-logger'
import reducer from './reducer';
const mystore=legacy_createStore(reducer,applyMiddleware(logger))
export default mystore;