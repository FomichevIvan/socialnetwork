import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IPost} from "../../shared/interfaces/post";

const initialState: any = {
   posts: []
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        loadPosts: (state, action) => {
            state.posts = action.payload
        },

        deletePost : (state, action) => {
            state.posts = state.posts.filter((el : IPost ) => el.id  !== action.payload)
        },

        addPost : (state, action) => {
            state.posts.push(action.payload)
        },
        //editPost


}
})

export const {loadPosts, deletePost, addPost} = postSlice.actions;
export default postSlice.reducer





