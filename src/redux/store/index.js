import { configureStore } from "@reduxjs/toolkit";
import courseSlice from '../slices/course.slice'
import userSlice from "../slices/user.slice";

const store=configureStore({
    reducer: {
        courses: courseSlice,
        user:userSlice
    }
})

export default store
