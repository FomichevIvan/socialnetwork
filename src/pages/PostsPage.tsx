import { ListComponent } from '../components';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import PostContainer from '../components/PostContainer';

export const PostsPage = () => {
  return <PostContainer />;
};
