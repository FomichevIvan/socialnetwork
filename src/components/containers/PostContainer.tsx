import { useEffect, useState } from 'react';
import { ListMui } from '../presentational';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/redux/store';
import { changeFlag, loadAllPosts, setCurPost } from '../../store/redux/posts';

import { Button, Divider, List } from '@mui/material';
import { PostModalForm } from '../presentational';
import { AuthForm } from '../presentational/AuthForm';

export default function PostContainer() {
  // const updated = useSelector((state: RootState) => state.posts.updated);
  const show = useSelector((state: RootState) => state.posts.show);
  const post = useSelector((state: RootState) => state.posts.curPost);
  const user = useSelector((state: RootState) => state.user.user);

  const dispatch = useDispatch<AppDispatch>();

  const onModalOpen = () => {
    dispatch(changeFlag(true));
  };

  const onCancel = () => {
    dispatch(changeFlag(false));
    dispatch(setCurPost({ id: null, userId: null, title: '', body: '' }));
  };

  useEffect(() => {
    user && dispatch(loadAllPosts());
  }, [user?.uid]);

  return (
    <>
      {/*<Button*/}
      {/*  className={'start-button'}*/}
      {/*  onClick={onModalOpen}*/}
      {/*  variant="outlined"*/}
      {/*>*/}
      {/*  Add post*/}
      {/*</Button>*/}
      {/*{show && <PostModalForm post={post} onCancel={onCancel} show={show} />}*/}
      {<ListMui />}
    </>
  );
}
