import { Button, Input } from '@mui/material';
import { ReactElement, SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { clearErrors } from '../store/redux/users';
import { auth } from '../index';
import { registerUserAsync, signInUserAsync } from '../store/redux/firebase';
import { useMatch, useNavigate } from 'react-router-dom';

export function AuthForm(): ReactElement {
  const user = useSelector((state: RootState) => state.user.user);
  const isNew = useMatch('register');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const clearInput = () => {
    setEmail(null);
    setPassword(null);
  };

  const onChangeEmail = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setEmail(value);
    dispatch(clearErrors());
  };

  const onChangePassword = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setPassword(value);
    dispatch(clearErrors());
  };

  const userIsNew = () => {
    navigate('/register');
  };
  const userIsExisted = () => {
    navigate('/login');
  };

  const hasAccount = (
    <div className="flex-block">
      <span>Уже есть аккаунт? Тогда</span>
      <Button onClick={userIsExisted}> Войти </Button>
    </div>
  );

  const newUser = (
    <div className="flex-block">
      <span>Создать новый аккаунт?</span>
      <Button onClick={userIsNew}> Зарегистрироваться </Button>
    </div>
  );

  const loginOrSignUpUser = () => {
    if (isNew) {
      email && password && dispatch(registerUserAsync({ email, password }));
      clearInput();
    } else {
      email && password && dispatch(signInUserAsync({ email, password }));
      clearInput();
    }
  };

  useEffect(() => {
    console.log(auth.currentUser);
    auth.currentUser && navigate('/');
  }, [auth.currentUser]);

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Input
            onChange={onChangeEmail}
            value={email === null || email === undefined ? '' : email}
            id="email"
            type="mail"
            placeholder="email"
          />

          <Input
            onChange={onChangePassword}
            value={password === null || password === undefined ? '' : password}
            id="password"
            type="password"
            placeholder="password"
          />

          <Button disabled={!email || !password} onClick={loginOrSignUpUser}>
            {isNew ? 'Зарегистрироваться' : 'Войти'}
          </Button>
        </div>
        {isNew ? hasAccount : newUser}
        <div className="red-circle">
          <span>hi! ;)</span>
        </div>
      </div>
    </>
  );
}
