import {IPost} from "../../shared/interfaces/post";
import {ReactElement} from "react";
import {useDispatch} from "react-redux";
import {changeFlag, deletePost, setCurPost} from "../../store/redux/posts";
import {Button, ListItemText, Paper} from "@mui/material";
import ListItem from "@mui/material/ListItem";

export function PostMui ({userId, id, title, body}: IPost) : ReactElement {
    const dispatch = useDispatch()

    const onDelete = () => {
        dispatch(deletePost(id))
    }

    const onEdit = () => {
        dispatch(changeFlag(true))
        dispatch(setCurPost({userId, id, title, body}))
    }

    return (
        <>
            <Paper key={id} elevation={3}>
                <ListItem divider={true} style={{marginBottom: '15px'}}>
                    <ListItemText primary={title} secondary={body}/>
                    <div className={'button-cont'}>
                        <Button onClick={onEdit}>Edit</Button>
                        <Button onClick={onDelete}>Delete</Button>
                    </div>
                </ListItem>
            </Paper>

        </>

    )
}