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

export const ajaxMiddleware = store => next => action => {
    console.log('action', action.payload)
    let { endpoint, options } = action.payload
    return new Promise((resolve, reject) => {
        try {
            request(endpoint, options)
        } catch (e) {
            console.log('00000', e)
            reject(e)
        }

    })
}