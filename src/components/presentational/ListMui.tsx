import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux/store';
import { IPost } from '../../shared/interfaces/post';
import { ReactElement } from 'react';
import { Box, Divider, Grid, ListItemText, Paper, Stack } from '@mui/material';
import { PostMui } from './PostMui';

export function ListMui() {
  const list = useSelector((state: RootState) => state.posts.posts);
  return (
    <Box sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
      {list?.map(
        ({ userId, title, body, id }: IPost): ReactElement => (
          <PostMui key={id} title={title} body={body} userId={userId} id={id} />
        )
      )}
    </Box>
  );
}
