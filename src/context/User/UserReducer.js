import { GET_USERS, GET_PROFILE, AUTHENTICATE } from '../types'

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            }
        case GET_PROFILE:
            return {
                ...state,
                sltdUsr: payload
            }
        case AUTHENTICATE:
            return {
                ...state,
                auth: payload
            }
        default:
            return state
    }

}