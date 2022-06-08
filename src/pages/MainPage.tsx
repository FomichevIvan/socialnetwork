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
  const dispatch = useDispatch<AppDispatch>();

  const signOut = () => {
    dispatch(signOutUserAsync());
  };

  return (
    <>
      {'Hello Main'}
      {user ? <Button onClick={signOut}>SignOut</Button> : <AuthForm />}
    </>
  );
};
// как компоновать мои компоненты?(( Я после логинизации планировал перемещать на адрес с постами. Направление на
// ручку /posts было в компоненте формы аутентификации. Но она размонтируется, как только пявляется юзер (строка 26
// в этом файле). Значит, такая логика компоновки неверна!
