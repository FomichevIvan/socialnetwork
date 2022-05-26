import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IPost} from "../../shared/interfaces/post";

const initialState: any = {// как описать объект стейта TS
    posts: [],
    start: false,
}

const getData = async function getData (): Promise<IPost[]> {
    const response =  await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.ok ? await response.json() : new Error();
}
export const loadAllPosts = createAsyncThunk('loadAll', getData)

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

        deletePost : (state, action) => {
            state.posts = state.posts.filter((el : IPost ) => el.id  !== action.payload)
        },

        addPost : (state) => {
            state.start = true
        },

        createPost : (state, action) => {
            state.posts.push(action.payload)
        }
},
    extraReducers: (builder => {
        builder.addCase(loadAllPosts.fulfilled, ((state, action) => {
            state.posts = action.payload.slice(0,10).map((el: IPost ) => ({...el, id: self.crypto.randomUUID()}))
        }))
    })
})

export const { deletePost, addPost, createPost } = postSlice.actions;
export default postSlice.reducer;





