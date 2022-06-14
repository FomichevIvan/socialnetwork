import { ReactElement, ReactNode, useEffect } from 'react';
import { Button } from '@mui/material';
import { AuthForm } from './AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { useNavigate } from 'react-router-dom';
import { signOutUserAsync } from '../store/redux/firebase';

export const TopPanel = (): ReactElement => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch(signOutUserAsync());
  };

  useEffect(() => {
    !user && navigate('/login');
  }, [user]);
  return (
    <div className="container-top">
      {user ? (
        <>
          <Button onClick={signOut}>SignOut</Button>{' '}
          <h5 className="greet">{`You logged in as ${user.uid}`}</h5>
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
