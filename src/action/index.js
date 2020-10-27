
import { MY_NAME, COMPARE_VALUE } from '../constant'
import { removeTodo } from './actionCreate'
import { createAction } from 'redux-actions'
import { DEFAULT_EXTENSIONS } from '@babel/core';
import api from '../api'
import CreateHttpActions from '../store/createActions'
// const a = CreateHttpActions('getList','get','t','/trace')
// console.log('CreateHttpActions',a);


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
            data: { a: res.result.stat }
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
//CreateHttpActions里面包含成功失败和处理中的状态， 解构出来
export const { getList, getList_success, getList_failure, getList_padding } =
    CreateHttpActions('getList', '/news/list');
// console.log()