import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/Users/UserSlice";
export default configureStore({
    reducer: {
        user: userSlice.reducer
    }
})