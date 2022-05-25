import {ReactElement, ReactNode, useEffect, useState} from "react";
import {PostList, PostForm} from "../presentational/index";
import {IPost} from "../../shared/interfaces/post";
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from "../../store/redux/store";
import {addPost, loadPosts} from "../../store/redux/posts";

export default function PostContainer() {
    const start = useSelector((state: RootState) => state.posts.start)
    const dispatch = useDispatch()

    const getData = async function getData (): Promise<IPost[]> {
        const response =  await fetch('https://jsonplaceholder.typicode.com/posts')
        return response.ok ? await response.json() : new Error();
    }

    const onAdd = () => {
        dispatch(addPost())
    }

    useEffect(() => {
        getData().then(posts => {
            dispatch(loadPosts(posts.slice(0,10)))
        })
    }, [])

    return (
        <>
            {<button className={'start-button'} onClick={onAdd}>Add Post</button> }
            {start && <PostForm/>}
            {<PostList/>}
        </>
    )
}