import { request } from '../util'
import types from './createActions'
function logger({ getState }) {
    return next => action => {
        console.log('will dispatch', action)

        // 调用 middleware 链中下一个 middleware 的 dispatch。
        const returnValue = next(action)

        console.log('state after dispatch', getState())

        // 一般会是 action 本身，除非
        // 后面的 middleware 修改了它。
        return returnValue
    }
}
console.log('actiontypestypestypes', types)
export const ajaxMiddleware = store => next => action => {

    // const [requestType, successType, failureType] = types;
    let { endpoint, options } = action.payload
    return new Promise(async (resolve, reject) => {
        try {
            let res = await request(endpoint, options)
            console.log(res);

            resolve(res)
            // return next(successType(res))
        } catch (e) {
            console.log('00000', e)
            reject(e)
        }

    })
}