import { createActions } from 'redux-actions';


/*为了拥有三个状态，同时写很麻烦，所以改为三个状态同时用creatAction
{ type: 'FETCH_POSTS_REQUEST' }
{ type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
{ type: 'FETCH_POSTS_SUCCESS', response: { ... } }
*/

export const CreateManyStatus = createActions({
    'FETCH_REQUEST': () => { },
    'FETCH_FAILURE': [() => { }, () => {
        throw '获取失败'
    }],
    'FETCH_SUCCESS': () => { }

})   
