import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const registerUser = createAsyncThunk(
    'users/register',
    async ({ name, email, password }, thunkAPI) => {
        try {
            const res = await fetch(
                'https://mock-user-auth-server.herokuapp.com/api/v1/users',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name, email, password
                    })
                }
            )
            let data = await response.json()
            console.log('data ', data);
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

export const login = createAsyncThunk(
    'users/login',
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await fetch(
                'https://mock-user-auth-server.herokuapp.com/api/v1/auth',
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
        clearState:(state)=>{
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;

            return state;
        }
    },
    extraReducers: {
        [registerUser.fulfilled]: (state, {payload})=>{
            console.log('payload register ', payload);
            state.isFetching = false;
            state.isSuccess = true;
            state.email = payload.user.email
            state.username = payload.user.name
        },

        [registerUser.pending]: (state)=>{
            state.isFetching = true
        },

        [registerUser.rejected]: (state, {payload})=>{
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },

        [login.fulfilled]: (state, { payload }) => {
            state.email = payload.email;
            state.username = payload.name;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
          },
          [login.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
          },
          [login.pending]: (state) => {
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

export const {clearState} = userSlice.actions;
export const userSelector = state => state.user