import { useEffect, useState } from 'react';
import { ListComp } from './index';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/redux/store';
import { changeFlag, loadAllPosts, setCurPost } from '../store/redux/posts';
import postArray from '../utils/postArray.json';

import { Button, Divider, List } from '@mui/material';
import { PostModalForm } from './index';
import { AuthForm } from './AuthForm';

export default function PostContainer() {
  const show = useSelector((state: RootState) => state.posts.show);
  const post = useSelector((state: RootState) => state.posts.curPost);
  const list = useSelector((state: RootState) => state.posts.posts);
  const user = useSelector((state: RootState) => state.user);
  const state = useSelector((state: RootState) => state);

  const dispatch = useDispatch<AppDispatch>();

  const onModalOpen = () => {
    dispatch(changeFlag(true));
  };

  const onCancel = () => {
    dispatch(changeFlag(false));
    dispatch(setCurPost({ id: null, userId: null, title: '', body: '' }));
  };

  return (
    <>
      <div className="header-container">
        <h1>
          <p>Post list</p>
        </h1>
      </div>
      {/*<Button*/}
      {/*  className={'start-button'}*/}
      {/*  onClick={onModalOpen}*/}
      {/*  variant="outlined"*/}
      {/*>*/}
      {/*  Add post*/}
      {/*</Button>*/}
      {/*{show && <PostModalForm post={post} onCancel={onCancel} show={show} />}*/}
      {<ListComp list={list} />}
    </>
  );
}
