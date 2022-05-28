import {configureStore} from "@reduxjs/toolkit";
import postSliceReducer from "./posts";

export const store = configureStore({
    reducer: {
        posts: postSliceReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch