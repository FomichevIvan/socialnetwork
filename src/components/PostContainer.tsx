import { useEffect, useState } from 'react';
import { ListComponent } from './index';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/redux/store';
import { changeFlag, loadAllPosts, setCurPost } from '../store/redux/posts';

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

  useEffect(() => {
    user.user && dispatch(loadAllPosts());
  }, [user.user]);

  return (
    <>
      <h1>Post list</h1>
      {/*<Button*/}
      {/*  className={'start-button'}*/}
      {/*  onClick={onModalOpen}*/}
      {/*  variant="outlined"*/}
      {/*>*/}
      {/*  Add post*/}
      {/*</Button>*/}
      {/*{show && <PostModalForm post={post} onCancel={onCancel} show={show} />}*/}
      {<ListComponent list={list} />}
    </>
  );
}
