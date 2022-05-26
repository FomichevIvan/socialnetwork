import {IPost} from "../../shared/interfaces/post";
import {Post} from "./Post";
import {ReactElement} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/redux/store";


export function PostList () : ReactElement {
   const list = useSelector((state: RootState) => state.posts.posts);

    return list?.map(({userId, id, title, body}: IPost): ReactElement => {
        return (

            <div key={id} className={'posts-container'}>
                <Post userId={userId} id={id} title={title} body={body}/>
            </div>

        )
    })
}