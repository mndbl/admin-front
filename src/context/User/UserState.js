import { useReducer } from "react";
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import axios from "axios";
import { users } from "./users";

export function UserState({ children }) {

    const initialState = {
        auth: false,
        users: [],
        sltdUsr: null
    }
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const login = (email, password) => {
        const res = users.find((usr) => usr.email === email)
        res ? (
            dispatch({
                type: 'AUTHENTICATE',
                payload: true
            }),
            localStorage.setItem('userAuth', JSON.stringify(res))
        )
            :
            (alert('noautenticado'))
    }

    const signOut = () => {
        dispatch({
            type: 'AUTHENTICATE',
            payload: false
        })
    }

    const getUsers = async () => {
        const res = await axios.get('https://reqres.in/api/users')
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
            auth: state.auth,
            login,
            getUsers,
            getProfile,
            signOut
        }}>
            {children}
        </UserContext.Provider>
    )
}