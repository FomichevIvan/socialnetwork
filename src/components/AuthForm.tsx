import { Button, Input } from '@mui/material';
import { IUser } from '../shared/interfaces/post';
import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/redux/store';
import { clearErrors } from '../store/redux/users';

import { registerUserAsync, signInUserAsync } from '../store/redux/firebase';
import { useMatch, useNavigate } from 'react-router-dom';

export function AuthForm() {
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
    <div>
      <h4>Уже есть аккаунт? Тогда</h4>
      <Button onClick={userIsExisted}> Войти </Button>
    </div>
  );

  const newUser = (
    <div>
      <h4>Создать новый аккаунт?</h4>
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

  return (
    <>
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

        {isNew ? hasAccount : newUser}
      </div>
    </>
  );
}
