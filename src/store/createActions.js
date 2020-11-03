import { createAction } from 'redux-actions';
import { request } from '../util'

/*为了拥有三个状态，同时写很麻烦，所以改为三个状态同时用creatAction
{ type: 'FETCH_POSTS_REQUEST' }
{ type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
{ type: 'FETCH_POSTS_SUCCESS', response: { ... } }
*/
// 给action提供三种type，分别对应失败的情况和成功，还有请求中
//

export default (actionType, endpoint,method, options) => {
    const types = [createAction(`${actionType}_success`),
    createAction(`${actionType}_failure`),
    createAction(`${actionType}_padding`)]
    const payloadCreator = () => {
        return {
            endpoint,
            method,
            options,
            types
        }
    };
    let CreateHttpActions = {
        [actionType]: createAction(`${actionType}`, payloadCreator),
        [`${actionType}_success`]: createAction(`${actionType}_success`),
        [`${actionType}_failure`]: createAction(`${actionType}_failure`),
        [`${actionType}_padding`]: createAction(`${actionType}_padding`),
    }
    return CreateHttpActions
}
// 装饰action
// export const DecoratorActions = (params) => next => action => {
//     console.log(action)

// }
