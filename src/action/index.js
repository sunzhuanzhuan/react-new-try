
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
/**
 * 因为有thunk的原因
 * @param {介绍} state 
 */
// export const valueCompareFunction = (state) => async (dispatch) => {
//     let fn = await api.get('/toutiao/index?type=top&key=a61227231b675e6097a1de4716456294').then((res) => {
//         // console.log('1111111', 'data', res)
//         return res.reason
//     })
//     dispatch({
//         type: COMPARE_VALUE,
//         data: { a: fn }
//     })
// }
export const valueCompareFunction = (state) => async (dispatch) => {
    // 同步的方法只能这样，传不出来response
    new Promise((reslove, reject) => {
        api.get('/toutiao/index?type=top&key=a61227231b675e6097a1de4716456294').then((res) => {
            console.log('1111111', 'data', res)
            reslove(dispatch({
                type: COMPARE_VALUE,
                data: { a: res.reason }
            }))
        })
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
export const {
    getList,
    getList_success,
    getList_failure, getList_padding
} = CreateHttpActions('getList', '/toutiao/index', 'get', { type: 'top', key: 'a61227231b675e6097a1de4716456294' });

export const {
    postQuery,
    postQuery_success,
    postQuery_failure, postQuery_padding
} = CreateHttpActions('postQuery', '/sxpd/query', 'post', { key: '1cc20e5ca2a24c9a0c629649026199df', women: '猴子', man: '羊' });
// console.log()
// const getBookList = createAction('BOOK_LIST_GET', () => {
//     const bookList = [{
//         id: '1',
//         title: '123',
//         description: '123',
//     }, {
//         id: '2',
//         title: '234',
//         description: '234',
//     }];
//     return bookList;
// });

// export default {
//     getBookList,
// };