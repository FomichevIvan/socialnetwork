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
  }, [user]);

  return (
    <>
      <h1>Starting Page</h1>
      {!user && <AuthForm />}
    </>
  );
};
// как компоновать мои компоненты?(( Я после логинизации планировал перемещать на адрес с постами. Направление на
// ручку /posts было в компоненте формы аутентификации. Но она размонтируется, как только пявляется юзер (строка 26
// в этом файле). я управляю навигацией внутри этого компонета. Значит, такая логика компоновки неверна!

//если я на майнпейдж использую внутренний роутинг компонента, то он не работает. Если я нахожусь в самом
// компоненте, то работает.

//как разместить общий для всех компонент, типа навбара
