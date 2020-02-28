import { SET_ALERT, REMOVE_ALERT} from "./types";
export const setAlert = (msg, alertType) => dispatch => {
    const id = 1;
    dispatch({
        type: SET_ALERT,
        payload: {id, msg, alertType}
    })
    setTimeout(() => dispatch({
        type: REMOVE_ALERT,
        payload: id
    }),5000)
}