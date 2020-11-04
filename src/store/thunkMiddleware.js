import { request } from '../util'
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
// console.log('actiontypestypestypes', types)
export const ajaxMiddleware = store => next => action => {

    const [successType, failureType, requestType] = action.payload.types;
    // console.log('11111111111', successType);

    let { endpoint, options, method } = action.payload
    return new Promise(async (resolve, reject) => {
        try {
            let res = await request(endpoint, method, options)
            console.log(res);

            resolve(res)
            return next(successType(res))
        } catch (e) {
            console.log('00000', e)
            reject(e)
            return next(failureType(ex))
        }

    })
}