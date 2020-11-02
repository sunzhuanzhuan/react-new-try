import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {ajaxMiddleware} from './thunkMiddleware'
import rootReducer from '../reducer';
// console.log(',ajaxMiddleware',ajaxMiddleware)
// /**
//  * szz
//  * 2020/6/6
//  * 通过createStoreWithMdwareAPI创建createStore
//  * 1 包裹一个createStore方法 2 包裹扩展redux的中间件
//  * thunkMiddleware中间件为了让reduc支持处理异步的action
//  */
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const initialState = [];
const createStoreWithMdware = (composeEnhancers(applyMiddleware(
    thunkMiddleware,ajaxMiddleware
)))(createStore);
const store = createStoreWithMdware(rootReducer, initialState);
export default store;