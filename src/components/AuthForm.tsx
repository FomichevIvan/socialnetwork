import { Button, Input } from '@mui/material';
import { IUser } from '../shared/interfaces/post';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { clearErrors } from '../store/redux/users';
// import { authUserAsync } from '../../store/redux/users';
import { registerUserAsync, signInUserAsync } from '../store/redux/firebase';
import { useMatch, useNavigate } from 'react-router-dom';
import { Toast } from '../ui-kit/Toast';

export function AuthForm() {
  const isNew = useMatch('register');
  const user = useSelector((state: RootState) => state.user.user);

  const error = useSelector((state: RootState) => state.user.error);
  const message = useSelector((state: RootState) => state.user.message);
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

  const loginOrSignUpUser = () => {
    if (isNew) {
      email && password && dispatch(registerUserAsync({ email, password }));
      clearInput();
    } else {
      email && password && dispatch(signInUserAsync({ email, password }));
      clearInput();
    }
  };
  // useEffect(() => {
  //   user && navigate('/posts');
  // }, [user]);

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

        {isNew && (
          <div>
            <h4>Уже есть аккаунт? Тогда</h4>
            <Button onClick={userIsExisted}> Войти </Button>
          </div>
        )}

        {!isNew && (
          <div>
            <h4>Создать новый аккаунт?</h4>
            <Button onClick={userIsNew}> Зарегистрироваться </Button>
          </div>
        )}
      </div>
      <div>
        {error && <Toast severity={'error'}>{error}</Toast>}
        {message && <Toast severity={'success'}>{message}</Toast>}
      </div>
    </>
  );
}

//чистка. Новая ветка: 1. структура папок, 2. isNew  из стейта убрать 3. реализовать сохраниение юзера (сохранить в
// локалсторадж - достаем ююайди и обращаемся в файр)

// в аппе при маунте проверяем наличие юид в локалстор, по этому юид получаем пользователя
// очистка локалстор при логауте
