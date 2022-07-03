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

export interface INewPost {
  userId: string | null;
  id: string | null;
  title: string;
  body: string;
  avatar: string;
  photo: string;
}

export interface IPostModalProps {
  post: IPost;
  onCancel: () => void;
  show: boolean;
}

export interface IReduxState {
  posts: INewPost[];
  show: boolean;
  curPost: INewPost;
}

export interface IReduxUserState {
  user: IUser | null;
  message: null | IMessage;
  loading: boolean;
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

export interface IUserFields {
  name: string;
  lastName: string;
  city: string;
}

export interface IListComponentProps {
  list: INewPost[];
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
  currUrl: string | undefined;
  setImgUrl: (url: string) => void;
}

export interface IInformationBlock {
  clickedField: string;
  textInputData: string;
  edit: boolean;
  textFieldData: string | undefined;
  label: string;
  show: boolean;
  thisFieldName: string;
  onChangeInput: (e: SyntheticEvent) => void;
  onEdit: (name: string) => void;
  onSave: () => void;
}

export interface ITextInputProps {
  text: string | undefined;
  onChangeInput: (e: SyntheticEvent) => void;
}

export interface ITextFieldProps {
  text: string | undefined;
  label: string;
}
