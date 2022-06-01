import { Button, Input } from '@mui/material';
import { IAuthProps, IUser } from '../../shared/interfaces/post';
import { SyntheticEvent, useState } from 'react';

export function AuthForm({ authorized, user, onSubmit }: IAuthProps) {
  const [userForm, setUserForm] = useState<IUser>(user);
  const { email, password } = userForm;

  const onChange = (e: SyntheticEvent) => {
    const { value, id } = e.target as HTMLInputElement;
    setUserForm(state => ({ ...state, [id]: value }));
  };
  return (
    <>
      <Input
        onChange={onChange}
        value={email === null || email === undefined ? '' : email}
        id={'email'}
        type="mail"
        placeholder="email"
      />
      <Input
        onChange={onChange}
        value={password === null || password === undefined ? '' : password}
        id={'password'}
        type="password"
        placeholder="password"
      />
      <Button onClick={onSubmit}>
        {authorized ? 'Войти' : 'Зарегистрироваться'}
      </Button>
    </>
  );
}
