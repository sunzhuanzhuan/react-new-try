import { combineReducers } from 'redux';
import { MY_NAME, COMPARE_VALUE } from '../constant'
// console.log(TRY_TYPE);

/**
 * zyx
 * 2020/6/6
 * 将reducer拆分成多个不同的reducer 防止后期项目越来越大reducer变得越来越臃肿
 * 最好是一个模块建一个单独得reducer
 */


// export default rootReducer

let tryState = (state = [1], action) => {
    switch (action.type) {
        case MY_NAME:
            return action.data
        default:
            return [0, 11]
    }
}
let valueCompare = (state = {
    a: {
        c: 1
    },
    b: {
        d: 2
    }
}, action) => {
    switch (action.type) {
        case COMPARE_VALUE:
            return action.data;
        default:
            return state
    }
}
export default combineReducers({
    tryState,
    valueCompare
})