import { User } from 'firebase/auth';
import { ListComponent } from '../../components';

export interface IPost {
  userId: string | null;
  id: string | null;
  title: string;
  body: string;
  _id?: string | null;
}

export interface IPostModalProps {
  post: IPost;
  onCancel: () => void;
  show: boolean;
}

export interface IReduxState {
  posts: IPost[];
  show: boolean;
  curPost: IPost;
}

export interface IReduxUserState {
  user: IUser | null;
  message: string;
  error: string;
}

export interface IUser {
  displayName: string;
  email: string;
  password: string;
  uid: string;
}

export interface IToast {
  text: string;
  severity: string;
}

export interface IListComponentProps {
  list: IPost[];
}
