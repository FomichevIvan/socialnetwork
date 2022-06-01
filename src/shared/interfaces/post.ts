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
  user: IUser;
  show: boolean;
}

export interface IUser {
  displayName: string;
  email: string;
  password: string;
}

export interface IAuthProps {
  authorized: boolean;
  user: IUser;
  onSubmit: () => void;
}
