import {useEffect} from "react";
import {PostList, PostForm} from "../presentational";
import { useSelector, useDispatch } from 'react-redux'
import {RootState, AppDispatch} from "../../store/redux/store";
import {addPost, loadAllPosts} from "../../store/redux/posts";

export default function PostContainer() {
    const start = useSelector((state: RootState) => state.posts.start)
    const dispatch  = useDispatch<AppDispatch>()

    const onAdd = () => {
        dispatch(addPost())
    }

    useEffect(() => {
        dispatch(loadAllPosts())
    }, [])

    return (
        <>
            {<button className={'start-button'} onClick={onAdd}>Add Post</button> }
            {start && <PostForm/>}
            {<PostList/>}
        </>
    )
}