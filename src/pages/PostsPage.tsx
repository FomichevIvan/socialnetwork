import PostContainer from '../components/PostContainer';
import { ReactElement, useEffect } from 'react';
import { CustomIcon } from '../ui-kit/CustomIcon';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { getPostsSync } from '../store/redux/posts';
import postArray from '../utils/postArray.json';

export const PostsPage = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPostsSync(postArray));
  }, []);
  return (
    <>
      <PostContainer />
    </>
  );
};
