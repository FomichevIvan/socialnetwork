import { Button, Divider, Input } from '@mui/material';
import { IUser } from '../../shared/interfaces/post';
import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/redux/store';
import { changeStatus, clearErrors } from '../../store/redux/users';
// import { authUserAsync } from '../../store/redux/users';
import { registerUserAsync, signInUserAsync } from '../../store/redux/firebase';
import { useMatch, useNavigate } from 'react-router-dom';

export function AuthForm() {
  // const user = useSelector((state: RootState) => state.user.user);
  const isNew = useMatch('register');
  // console.log(isNew, 'new');
  const error = useSelector((state: RootState) => state.user.error);
  const dispatch = useDispatch<AppDispatch>();

  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const navigate = useNavigate();

  // const defaultV = {
  //   displayName: '',
  //   email: '',
  //   password: '',
  //   uid: '',
  // };
  // const [userForm, setUserForm] = useState<IUser | null>(user || defaultV);
  // const { email, password } = userForm || ({} as IUser);
  // const onChange = (e: SyntheticEvent) => {
  //   const { value, id } = e.target as HTMLInputElement;
  //   setUserForm(state => {
  //     return {...state, [id]: value}
  //     // if (state) {
  //     //   return { ...state, [id]: value };
  //     // } else {
  //     //   return { [id]: value };
  //     // }
  //   });
  // };

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

  const getUser = () => {
    if (isNew) {
      email && password && dispatch(registerUserAsync({ email, password }));
      setEmail(null);
      setPassword(null);
    } else {
      email && password && dispatch(signInUserAsync({ email, password }));
      setEmail(null);
      setPassword(null);
    }
  };

  return (
    <div className="container">
      <Input
        onChange={onChangeEmail}
        value={email === null || email === undefined ? '' : email}
        id={'email'}
        type="mail"
        placeholder="email"
      />

      <Input
        onChange={onChangePassword}
        value={password === null || password === undefined ? '' : password}
        id={'password'}
        type="password"
        placeholder="password"
      />

      <Button disabled={!email || !password} onClick={getUser}>
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
      {error && error}
    </div>
  );
}

//чистка. Новая ветка: 1. структура папок, 2. isNew  из стейта убрать 3. реализовать сохраниение юзера (сохранить в
// локалсторадж - достаем ююайди и обращаемся в файр)
