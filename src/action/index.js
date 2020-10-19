
import { TRY_TYPE } from '../constant'

export const tryFunction = (state) => (dispatch) => {
    dispatch({
        type: TRY_TYPE,
        payload: [1, 2, 3]
    })
}