
import { MY_NAME, COMPARE_VALUE } from '../constant'
import { removeTodo } from './actionCreate'
import { createAction } from 'redux-actions'
import { DEFAULT_EXTENSIONS } from '@babel/core';
import api from '../api'
export function tryFunction(state) {
    return (dispatch) => {
        dispatch({
            type: MY_NAME,
            data: [2, 2, 2]
        })
    }
}
export const valueCompareFunction = (state) => (dispatch) => {
    // 只能这样，传不出来response
    api.get('/toutiao/index?type=top&key=a61227231b675e6097a1de4716456294').then((res) => {
        dispatch({
            type: COMPARE_VALUE,
            data: { a: 1 }
        })
        // return res.result.stat
    })
}

export const CreateNewAction = createAction('tryAction', () => {
    // 只能这样，传不出来response
    api.get('/toutiao/index?type=top&key=a61227231b675e6097a1de4716456294').then((res) => {

        return res.result.data
    })
    return { data1: 111 }

})