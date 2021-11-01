import { LOG_OUT, SET_LOGGED_IN_USER } from "../actions/authedUser"
export default function authedUser(state={},action) {
    switch (action.type) {
        case SET_LOGGED_IN_USER:
            return action.user
        case LOG_OUT:
            return {}
        default:
            return state
    }
}