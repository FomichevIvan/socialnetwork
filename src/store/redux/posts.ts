import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IPost} from "../../shared/interfaces/post";

const initialState: any = {// как описать объект стейта TS
    posts: [],
    start: false,
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        loadPosts: (state, action) => {
            state.posts = action.payload.map((el: IPost ) => ({...el, id: self.crypto.randomUUID()}))
        },

        deletePost : (state, action) => {
            state.posts = state.posts.filter((el : IPost ) => el.id  !== action.payload)
        },

        addPost : (state) => {
            state.start = true
        },

        createPost : (state, action) => {
            state.posts.push(action.payload)
        }
}
})

export const {loadPosts, deletePost, addPost, createPost} = postSlice.actions;
export default postSlice.reducer





