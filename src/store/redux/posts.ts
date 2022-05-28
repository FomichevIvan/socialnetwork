import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IPost, IReduxState} from "../../shared/interfaces/post";

const initialState: IReduxState = {
    posts: [],
    show: false,
    curPost: {id: null, userId: null, title: '', body: ''}
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

        changeFlag : (state, action) => {
            state.show = action.payload
        },

        createPost : (state, action) => {
            // eslint-disable-next-line no-restricted-globals
            action.payload.id = self.crypto.randomUUID()
            state.posts.push(action.payload)
        },
        setCurPost : (state, action) => {
            state.curPost = action.payload
        },

        saveEditedPost: (state, action) => {
            state.posts = state.posts.map((el: IPost) => {
                if(el.id === action.payload.id) {
                    return el = action.payload
                }
                else return el
            })
            state.curPost = {id: null, userId: null, title: '', body: ''}
        },
},
    extraReducers: (builder => {
        builder.addCase(loadAllPosts.fulfilled, ((state, action) => {
            // eslint-disable-next-line no-restricted-globals
            state.posts = action.payload.slice(0,10).map((el: IPost ) => ({...el, id: self.crypto.randomUUID()}))
        }))
    })
})

export const { deletePost, changeFlag, createPost, setCurPost, saveEditedPost } = postSlice.actions;
export default postSlice.reducer;





