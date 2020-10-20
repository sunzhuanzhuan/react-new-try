
import { MY_NAME } from '../constant'

export function tryFunction(state) {


    let tempObj = {
        modalShow: [2, 2, 2]
    }
    console.log(state);

    return (dispatch) => {
        console.log(2222333);

        dispatch({
            type: MY_NAME,
            data: [2, 2, 2]
        })
    }
}
// export const tryFunction = (state) => (dispatch) => {
//     dispatch({
//         type: MY_NAME,
//         data: [2, 2, 3]
//     })
// }  