import {ReactElement, useState} from "react";
import Post from "../../utils/post";
import  {SyntheticEvent} from 'react';
import { useDispatch} from "react-redux";
import {createPost} from "../../store/redux/posts";

export function PostForm () {

    const [newPost, setNewPost] = useState(new Post())
    const dispatch = useDispatch()

    const onInput = (e: SyntheticEvent)  => {
        const {value, id} = e.target as HTMLInputElement;
        setNewPost(post => ({...post, [id]: value}));
    }

    const onSubmit = () => {
        dispatch(createPost(newPost))
        setNewPost(new Post())
    }

    return (
        <div className={'post-form-cont'}>
            <div>
                <input value={(newPost.title === null || newPost.title === undefined) ? '' : newPost.title } id={'title'} onChange={onInput} className={'post-title-input'}/>
                <input value={(newPost.body === null || newPost.body === undefined) ? '' : newPost.body } id={'body'} onChange={onInput} className={'post-body-input'}/>
                <button onClick={onSubmit}>Submit Post</button>
            </div>
        </div>
    )
}