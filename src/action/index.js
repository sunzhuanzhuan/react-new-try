
import { MY_NAME } from '../constant'

export function tryFunction(state) {


    let tempObj = {
        modalShow: [2, 2, 2]
    }
    console.log(1111);

    return (dispatch) => {
        console.log(2222333);

        dispatch({
            type: MY_NAME,
            data: tempObj
        })
    }
}  