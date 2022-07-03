import { INewPost } from '../shared/interfaces/post';
import { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFlag, deletePostAsync, setCurPost } from '../store/redux/posts';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  ListItemText,
  Paper,
  styled,
  Typography,
} from '@mui/material';

import ListItem from '@mui/material/ListItem';
import { AppDispatch } from '../store/redux/store';
import {
  MdOutlineMoreVert,
  MdOutlineFavoriteBorder,
  MdShare,
  MdExpandMore,
} from 'react-icons/md';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export function NewPost({
  userId,
  id,
  title,
  body,
  avatar,
  photo,
}: INewPost): ReactElement {
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleExpandClick = () => setExpanded(expanded => !expanded);
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  // const dispatch = useDispatch<AppDispatch>();
  //
  // const onDelete = () => {
  //   id && dispatch(deletePostAsync(id));
  // };
  //
  // const onEdit = () => {
  //   dispatch(changeFlag(true));
  //   dispatch(setCurPost({ userId, id, title, body }));
  // };

  return (
    <Card className="card">
      <CardHeader
        avatar={<Avatar src={avatar}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MdOutlineMoreVert />
          </IconButton>
        }
        title={title}
        subheader={`by Andy Garcia`}
      />

      <CardMedia
        sx={{ objectFit: 'scale-down' }}
        component="img"
        height="200"
        image={photo}
      />

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <MdOutlineFavoriteBorder />
        </IconButton>
        <IconButton aria-label="share">
          <MdShare />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <MdExpandMore />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
