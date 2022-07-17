import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import { IListComponentProps, IPost } from '../shared/interfaces/interfaces';
import { ReactElement } from 'react';
import { Box } from '@mui/material';
import { Post } from './Post';

//OLD VERSION
export function ListComponent({ list }: IListComponentProps) {
  return (
    <Box sx={{ width: '100%', maxWidth: 700 }}>
      {list?.map(
        ({ userId, title, body, id }: IPost): ReactElement => (
          <Post key={id} title={title} body={body} userId={userId} id={id} />
        )
      )}
    </Box>
  );
}
