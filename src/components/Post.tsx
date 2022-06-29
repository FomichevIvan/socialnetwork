import { IPost } from '../shared/interfaces/post';
import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { changeFlag, deletePostAsync, setCurPost } from '../store/redux/posts';
import { Button, ListItemText, Paper } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { AppDispatch } from '../store/redux/store';

export function Post({ userId, id, title, body }: IPost): ReactElement {
  const dispatch = useDispatch<AppDispatch>();

  const onDelete = () => {
    id && dispatch(deletePostAsync(id));
  };

  const onEdit = () => {
    dispatch(changeFlag(true));
    dispatch(setCurPost({ userId, id, title, body }));
  };

  return (
    <>
      <Paper elevation={3}>
        <ListItem key={id} divider={true} style={{ marginBottom: '15px' }}>
          <ListItemText primary={title} secondary={body} />
          <div className={'button-cont'}>
            <Button onClick={onEdit}>Edit</Button>
            <Button onClick={onDelete}>Delete</Button>
          </div>
        </ListItem>
      </Paper>
    </>
  );
}
