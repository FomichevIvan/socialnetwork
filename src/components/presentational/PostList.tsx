import {IPost} from "../../shared/interfaces/post";
import Post from "./Post";
import {ReactElement, ReactNode} from "react";


export default function PostList ({posts} : any) : ReactElement {


    const elements = posts?.map(({userId, id, title, body}: IPost) : ReactElement => {
        return (
            <div key={id} className={'posts-container'}>
                <Post userId={userId} id={id} title={title} body={body}/>
            </div>
        )
    })

    return elements
}