import { Alert } from '@mui/material';
import { ToastExtendedProps } from '../shared/interfaces/post';

export const Toast = (props: ToastExtendedProps) => {
  const { severity, message } = props;
  return (
    <div className="toast">
      <Alert severity={severity}>{message}</Alert>
    </div>
  );
};
