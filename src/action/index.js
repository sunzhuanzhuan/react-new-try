
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
    dispatch({
        type: COMPARE_VALUE,
        data: { a: 1 }
    })
}

export const CreateNewActions = createAction('tryAction', () => {

    api.get('/toutiao/index?type=top&key=a61227231b675e6097a1de4716456294').then((res) => {
        console.log(res)
    })
})