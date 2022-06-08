import React, { useEffect, useState } from 'react';

import './App.css';
import { AuthForm } from './components/AuthForm';

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { PostsPage } from './pages/PostsPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/redux/store';
import { signInAsCurrUser } from './store/redux/users';
import { TopPanel } from './components/TopPanel';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);
  useEffect(() => {
    // не могу использовать навигацию тут

    if (user === null) {
      // если юзер налл, то ищем его методами файрбейс
      onAuthStateChanged(auth, user => {
        if (user) {
          // если он нашелся, значит, он залогинен, просто произошла перезагрузка страницы
          console.log(user, 'looking for user in firebase');
          const { currentUser } = auth;
          dispatch(signInAsCurrUser(JSON.parse(JSON.stringify(currentUser))));
        } else {
          console.log('no logged user'); // юзер не нашелся
        }
      });
    }
  }, [user]);
  return (
    <BrowserRouter>
      <TopPanel />
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/login'} element={<AuthForm />} />
        <Route path={'/register'} element={<AuthForm />} />
        <Route path={'/posts'} element={<PostsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// где размещать разлогин
// как использовать переадресацию вне компонентов РОУТ
