import { AlertProps } from '@mui/material';
import { InputProps } from '@mui/material/Input/Input';
import { SyntheticEvent } from 'react';

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
  uid: string;
  avatar: string;
  name: string;
  lastName: string;
  city: string;
  email: string;
  images: string[];
  favorites: string[];
  friends: string[];
  posts: IPost[];
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

export interface IFileInputProps extends InputProps {
  onChange: (e: SyntheticEvent) => void;
}

export interface IFileLoader {
  setImgUrl: (url: string) => void;
}
