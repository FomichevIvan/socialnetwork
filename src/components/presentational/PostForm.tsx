import {ReactElement, useState} from "react";
import Post from "../../utils/post";
import  {SyntheticEvent} from 'react';
import { useDispatch} from "react-redux";
import {createPost} from "../../store/redux/posts";

export function PostForm () {

    const [newPost, setNewPost] = useState(new Post())


    const dispatch = useDispatch()

    const onInput = (e: SyntheticEvent)  => {// обработка полей и запись в локальный стейт
        const {value, id} = e.target as HTMLInputElement;
        setNewPost(post => ({...post, [id]: value}));
    }

    const onSubmit = () => {// отправка нового поста
        // setNewPost(post => ({...post, id: self.crypto.randomUUID()}))// добавляем айди при создании поста -
        // ПОЧЕМУ НЕ РАБОТАЕТ!?
        // console.log(newPost)
        dispatch(createPost(newPost))
        setNewPost(new Post())// очистка формы (так себе вариант, но не стал делать еще один вариант объекта
        // начального состояния)
    }

    return (
        <div className={'post-form-cont'}>
                <input value={(newPost.title === null || newPost.title === undefined) ? '' : newPost.title } id={'title'} placeholder={'title'} onChange={onInput} className={'post-title-input'}/>
                <input value={(newPost.body === null || newPost.body === undefined) ? '' : newPost.body } id={'body'} placeholder={'text something'} onChange={onInput} className={'post-body-input'}/>
                <button disabled={!newPost.title && !newPost.body} onClick={onSubmit}>Submit Post</button>
        </div>
    )
}