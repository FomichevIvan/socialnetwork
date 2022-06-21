import { ReactElement } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { signOutUserAsync } from '../store/redux/firebase';
import { auth } from '../index';

export const TopPanel = (): ReactElement => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  const authUser = auth.currentUser;

  const signOut = () => {
    dispatch(signOutUserAsync());
  };

  return (
    <div className="container-top">
      {authUser ? (
        <>
          <Button onClick={signOut}>SignOut</Button>{' '}
          <h5 className="greet">{`You logged in as ${user?.name}`}</h5>
        </>
      ) : (
        <>
          <h5>Dear guest, sign in or register to see more!</h5>
        </>
      )}
    </div>
  );
};
