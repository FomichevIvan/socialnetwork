import { ReactElement, ReactNode, useEffect } from 'react';
import { Button } from '@mui/material';
import { AuthForm } from './AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { useNavigate } from 'react-router-dom';
import { signOutUserAsync, updateUserAsync } from '../store/redux/firebase';
import firebase from 'firebase/compat';
import { auth } from '../index';

export const TopPanel = (): ReactElement => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const authUser = auth.currentUser;
  // console.log(authUser, 'authcu');

  const signOut = () => {
    dispatch(signOutUserAsync());
  };

  const upd = () => {
    dispatch(
      updateUserAsync({
        start: Date.now(),
      })
    );
  };

  return (
    <div className="container-top">
      {authUser ? (
        <>
          <Button onClick={signOut}>SignOut</Button>{' '}
          <Button onClick={upd}>Upd</Button>
          <Button onClick={() => console.log(user, 'user now')}>
            User is...
          </Button>
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

//
