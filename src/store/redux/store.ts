import {configureStore, combineReducers} from "@reduxjs/toolkit";
import postsReducer from "./posts";

export const store = configureStore({
    reducer: {
        posts: postsReducer
    },
})

// console.log(store)


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch