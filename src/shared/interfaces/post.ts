import { AlertProps } from '@mui/material';

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
  message: null | IMessage;
}

export interface IUser {
  displayName: string;
  email: string;
  password: string;
  uid: string;
}

export interface IListComponentProps {
  list: IPost[];
}

export interface ToastExtendedProps extends AlertProps {
  size?: 'sm' | 'xl';
  message?: string;
}

export interface IMessage {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
}
