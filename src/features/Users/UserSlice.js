import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const urlBase = "http://127.0.0.1:8000/api"

export const registerUser = createAsyncThunk(
    'users/register',
    async ({ name, email, password }, thunkAPI) => {

        try {
            console.log('email ', email);
            const response = await fetch(
                `${urlBase}/register`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                        password_confirmation: password
                    }),
                }
            )
            let data = await response.json()

            if (response.status === 500) {
                return thunkAPI.rejectWithValue('Internal Server Error')
            }
            if (response.status === 200) {
                localStorage.setItem('token', data.token)
                return { ...data, username: name, email: email }
            } else {
                return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            console.log('error ', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

export const loginUser = createAsyncThunk(
    'users/login',
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await fetch(
                `${urlBase}/login`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );
            let data = await response.json();
            console.log('response', data);
            if (response.status === 500) {
                return thunkAPI.rejectWithValue('Internal Server Error')
            }
            if (response.status === 200) {
                localStorage.setItem('token', data.token);
                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const fetchUserBytoken = createAsyncThunk(
    'users/fetchUserByToken',
    async ({ token }, thunkAPI) => {
        try {
            const response = await fetch(
                'https://mock-user-auth-server.herokuapp.com/api/v1/users',
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        Authorization: token,
                        'Content-Type': 'application/json',
                    },
                }
            );
            let data = await response.json();
            console.log('data', data, response.status);
            if (response.status === 500) {
                return thunkAPI.rejectWithValue('Internal Server Error')
            }
            if (response.status === 200) {
                return { ...data };
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: ''
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;

            return state;
        }
    },
    extraReducers: {
        [registerUser.fulfilled]: (state, { payload }) => {
            console.log('payload register ', payload);
            state.isFetching = false;
            state.isSuccess = true;
            state.email = payload.data.email
            state.username = payload.data.name
        },

        [registerUser.pending]: (state) => {
            state.isFetching = true
        },

        [registerUser.rejected]: (state, { payload }) => {
            console.log('rejected register ', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload?.message;
        },

        [loginUser.fulfilled]: (state, { payload }) => {
            console.log('login fulfilees ', payload);
            state.email = payload.email;
            state.username = payload.name;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [loginUser.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload?.message;
        },
        [loginUser.pending]: (state) => {
            state.isFetching = true;
        },
        [fetchUserBytoken.pending]: (state) => {
            state.isFetching = true;
        },
        [fetchUserBytoken.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;

            state.email = payload.email;
            state.username = payload.name;
        },
        [fetchUserBytoken.rejected]: (state) => {
            console.log('fetchUserBytoken');
            state.isFetching = false;
            state.isError = true;
        },
    }
})

export const { clearState } = userSlice.actions;
export const userSelector = state => state.user