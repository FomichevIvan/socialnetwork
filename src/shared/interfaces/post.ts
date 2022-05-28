export interface IPost {
    userId: string | null,
    id: string | null,
    title: string,
    body: string
}

export interface IPostModalProps {
    post: IPost,
    onCancel: () => void,
    show: boolean
}

export interface IReduxState {
    posts: IPost[],
    show: boolean,
    curPost: IPost
}