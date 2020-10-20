import { combineReducers } from 'redux';
import { MY_NAME } from '../constant'
// console.log(TRY_TYPE);

/**
 * zyx
 * 2020/6/6
 * 将reducer拆分成多个不同的reducer 防止后期项目越来越大reducer变得越来越臃肿
 * 最好是一个模块建一个单独得reducer
 */


// export default rootReducer

let tryState = (state = [1], action) => {
    console.log('action.type', action);

    switch (action.type) {
        case MY_NAME:
            return action.data
        default:
            return [0, 11]
    }
}
export default combineReducers({
    tryState
})