import {ReactElement, ReactNode, useEffect, useState} from "react";
import PostList from "../presentational/PostList";
import {IPost} from "../../shared/interfaces/post";

export default function PostContainer() {

    const  [list, setList] = useState <IPost[] | null> (null)

    const getData = async function getData (): Promise<IPost[]> {
        const response =  await fetch('https://jsonplaceholder.typicode.com/posts')
        return response.ok ? await response.json() : new Error();
    }

    useEffect(() => {
        getData().then(posts => setList(posts.slice(0,10)))
    }, [])


    return (
        <>
            {list ? <PostList posts={list}/> : <div>Error!!</div>}
        </>
    )
}