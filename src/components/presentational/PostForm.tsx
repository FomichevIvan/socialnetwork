import {useState} from "react";
import  {SyntheticEvent} from 'react';
import { useDispatch} from "react-redux";
import {createPost} from "../../store/redux/posts";
import {IPost} from "../../shared/interfaces/post";

export function PostForm () {

    const initialState = {id: null, userId: null, title: '', body: ''}
    const [newPost, setNewPost] = useState<IPost>(initialState);
    const dispatch = useDispatch();

    const onChange = (e : SyntheticEvent) => {
        const {value, id} = e.target as HTMLInputElement;
         setNewPost(state => ({...state, [id]: value}))
    }

    const onSubmit = () => {
        dispatch(createPost({title: newPost.title, body: newPost.body, id:  self.crypto.randomUUID(), userId: null}))
        setNewPost(initialState)
    }

    return (
        <div className={'post-form-cont'}>
                <input value={(newPost.title === null || newPost.title === undefined) ? '' : newPost.title } id={'title'} placeholder={'title'} onChange={onChange} className={'post-title-input'}/>
                <input value={(newPost.body === null || newPost.body === undefined) ? '' : newPost.body } id={'body'} placeholder={'text' +
                    ' something'} onChange={onChange} className={'post-body-input'}/>
                <button disabled={!newPost.title && !newPost.body} onClick={onSubmit}>Submit Post</button>
        </div>
    )
}