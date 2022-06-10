import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { Button } from '@mui/material';
import { auth } from '../index';
import {
  registerUserAsync,
  signInUserAsync,
  signOutUserAsync,
} from '../store/redux/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { AuthForm } from '../components/AuthForm';

export const MainPage = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const navigate = useNavigate();

  useEffect(() => {
    user && navigate('/posts');
  }, []);

  return (
    <>
      <h1>Starting Page</h1>
    </>
  );
};
