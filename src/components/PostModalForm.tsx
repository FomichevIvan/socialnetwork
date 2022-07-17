import { useState } from 'react';
import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFlag, createNewPost, editPostAsync } from '../store/redux/posts';
import { IPost, IPostModalProps } from '../shared/interfaces/interfaces';
import { Box, Button, Input, Modal, TextField } from '@mui/material';
import { AppDispatch } from '../store/redux/store';

export function PostModalForm({ onCancel, post, show }: IPostModalProps) {
  const [currentPost, setCurrentPost] = useState<IPost>(post);
  const { id, title, body } = currentPost;
  const dispatch = useDispatch<AppDispatch>();

  const onChange = (e: SyntheticEvent) => {
    const { value, id } = e.target as HTMLInputElement;
    setCurrentPost(state => ({ ...state, [id]: value }));
  };

  const onSubmit = () => {
    if (id) {
      dispatch(editPostAsync(currentPost));
      dispatch(changeFlag(false));
    } else {
      dispatch(createNewPost(currentPost));
      dispatch(changeFlag(false));
    }
  };

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
  };
  return (
    <Modal open={show}>
      <Box sx={style}>
        <div className={'row-cont'}>
          <Input
            multiline
            rows={6}
            value={title === null || title === undefined ? '' : title}
            id={'title'}
            placeholder={'title'}
            onChange={onChange}
            className={'post-title-input'}
          />
          <Input
            multiline
            rows={6}
            value={body === null || body === undefined ? '' : body}
            id={'body'}
            placeholder={'text' + ' something'}
            onChange={onChange}
            className={'post-body-input'}
          />
        </div>
        <div className={'row-cont'}>
          <Button disabled={!title && !body} onClick={onSubmit}>
            {id ? 'SAVE' + ' post' : 'Create post'}
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </div>
      </Box>
    </Modal>
  );
}
