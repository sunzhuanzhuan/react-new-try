import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducer';
/**
 * zyx
 * 2020/6/6
 * 通过createStoreWithMdwareAPI创建createStore
 * 1 包裹一个createStore方法 2 包裹扩展redux的中间件
 * thunkMiddleware中间件为了让reduc支持处理异步的action
 */
const initialState = {};
const createStoreWithMdware = applyMiddleware(
    thunkMiddleware
)(createStore);

const store = createStoreWithMdware(rootReducer, initialState);
export default store;