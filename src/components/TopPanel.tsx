import { ReactElement } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { signOutUserAsync } from '../store/redux/firebase';
import { auth } from '../index';
import { UserDashboard } from './UserDashboard';

export const TopPanel = (): ReactElement => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  const authUser = auth.currentUser;

  const signOut = () => {
    dispatch(signOutUserAsync());
  };

  return (
    <div className="container-top">
      <UserDashboard />
    </div>
  );
};
