import {IPost} from "../../shared/interfaces/post";
import {ReactElement} from "react";

export default function Post ({userId, id, title, body}: IPost) : ReactElement {

    return (
        <div className={'post'}>
            <h3 className={'post-title'}>
                {title}
            </h3>

            <div className={'post-body'}>
                {body}
            </div>
        </div>
    )
}