import { useReducer } from "react";
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import axios from "axios";

export function UserState({ children }) {

    const initialState = {
        users: [],
        sltdUsr: null
    }
    const [state, dispatch] = useReducer(UserReducer, initialState)
    const getUsers = async () => {
        const res = await axios.get('https://reqres.in/api/users')
        console.log(res.data.data);
        dispatch({
            type: 'GET_USERS',
            payload: res.data.data
        })
    }
    const getProfile = async (id) => {
        const res = await axios.get(`https://reqres.in/api/users/${id}`)
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data
        })
    }
    return (
        <UserContext.Provider value={{
            users: state.users,
            profile: state.sltdUsr,
            getUsers,
            getProfile
        }}>
            {children}
        </UserContext.Provider>
    )
}