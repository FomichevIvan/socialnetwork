import {useEffect, useState} from "react";
import {ListMui} from "../presentational";
import { useSelector, useDispatch } from 'react-redux'
import {RootState, AppDispatch} from "../../store/redux/store";
import {changeFlag, loadAllPosts, setCurPost} from "../../store/redux/posts";

import {Button, Divider, List} from '@mui/material';
import {PostModalForm} from "../presentational";


export default function PostContainer() {
    // const updated = useSelector((state: RootState) => state.posts.updated);
    const show = useSelector((state: RootState) => state.posts.show);
    const post = useSelector((state : RootState) => state.posts.curPost);
    //как правильно сделать зависимость для юзэфф.
    //как быть с _id (где его обработать)

    const dispatch  = useDispatch<AppDispatch>()


    const onAdd = () => {
        dispatch(changeFlag(true))
    }

    const onCancel = () => {
        dispatch(changeFlag(false))
        dispatch(setCurPost({id: null, userId: null, title: '', body: ''}))
    }

    useEffect(() => {
        dispatch(loadAllPosts())
    }, [])

    return (
        <>

            <Button className={'start-button'} onClick={onAdd} variant="outlined">Add post</Button>
            {show && <PostModalForm post={post} onCancel={onCancel} show={show}/>}
            {<ListMui/>}

        </>
    )
}