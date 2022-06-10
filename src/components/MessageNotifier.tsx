import { ReactElement, useEffect } from 'react';
import { Toast } from '../ui-kit/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { clearErrors } from '../store/redux/users';

export const MessageNotifier = (): ReactElement => {
  const message = useSelector((state: RootState) => state.user.message);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const unsubscribe = setTimeout(() => {
      dispatch(clearErrors());
    }, 2000);

    return () => clearInterval(unsubscribe);
  }, [message]);

  return <Toast severity={message?.type} message={message?.message} />;
};
