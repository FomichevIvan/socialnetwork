import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import { IListComponentProps, INewPost } from '../shared/interfaces/interfaces';
import { ReactElement } from 'react';
import { Box } from '@mui/material';
import { Post } from './Post';
import { PostComp } from './PostComp';

export function ListComp({ list }: IListComponentProps) {
  return (
    <div className="posts-box">
      <Box
        sx={{
          width: '100%',
          maxWidth: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {list?.map(
          ({
            userId,
            title,
            body,
            id,
            avatar,
            photo,
          }: INewPost): ReactElement => (
            <PostComp
              key={id}
              title={title}
              body={body}
              userId={userId}
              id={id}
              avatar={avatar}
              photo={photo}
            />
          )
        )}
      </Box>
    </div>
  );
}
