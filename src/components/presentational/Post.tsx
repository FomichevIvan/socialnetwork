import {IPost} from "../../shared/interfaces/post";
import {ReactElement} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/redux/store";
import {deletePost} from "../../store/redux/posts";

export default function Post ({userId, id, title, body}: IPost) : ReactElement {

    const list = useSelector((state: RootState) => state.posts.posts)
    const dispatch = useDispatch()

    const onDelete = () => {
        dispatch(deletePost(id))
    }

    return (
        <div className={'post'}>
            <h3 className={'post-title'}>
                {title}
            </h3>

            <div className={'post-body'}>
                {body}
            </div>

            <div className={'button-cont'}>
                <button>Edit</button>
                <button onClick={onDelete}>Delete</button>

            </div>
        </div>
    )
}