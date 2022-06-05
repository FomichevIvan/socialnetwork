import { User } from 'firebase/auth';

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
  isNew: boolean;
  error: string;
}

export interface IUser {
  displayName: string;
  email: string;
  password: string;
  uid: string;
}

// export interface IAuthProps {
//   // authorized: boolean;
//   // user: IUser;
//   // onSubmit: any;
//   // error: string;
// }
