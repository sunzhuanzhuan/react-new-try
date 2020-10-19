import { combineReducers } from 'redux';
import { TRY_TYPE } from '../constant'
import { tryFunction } from '../action'


/**
 * zyx
 * 2020/6/6
 * 将reducer拆分成多个不同的reducer 防止后期项目越来越大reducer变得越来越臃肿
 * 最好是一个模块建一个单独得reducer
 */


// export default rootReducer

export const tryState = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case TRY_TYPE:
            return action.payload
        default:
            return state
    }
}
export default combineReducers({
    //在这里导入每个模块的reducer
    tryState
})