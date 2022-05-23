import {ReactElement, ReactNode, useEffect, useState} from "react";
import PostList from "../presentational/PostList";
import {IPost} from "../../shared/interfaces/post";
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from "../../store/redux/store";
import {addPosts} from "../../store/redux/posts";

export default function PostContainer() {

    // const  [list, setList] = useState <IPost[] | null> (null)

    const list = useSelector((state: RootState) => state.posts.posts)
    const dispatch = useDispatch()

    const getData = async function getData (): Promise<IPost[]> {
        const response =  await fetch('https://jsonplaceholder.typicode.com/posts')
        return response.ok ? await response.json() : new Error();
    }

    useEffect(() => {
        getData().then(posts => {
            dispatch(addPosts(posts.slice(0,10)))
        })
    }, [])


    console.log(list, 'list')

    return (
        <>
            {list ? <PostList posts={list}/> : <div>Error!!</div>}
        </>
    )
}