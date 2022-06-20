import React, { ReactElement, useEffect } from 'react';

import './App.css';
import { AuthForm } from './components/AuthForm';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { PostsPage } from './pages/PostsPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/redux/store';
import { signInAsCurrUser } from './store/redux/users';
import { TopPanel } from './components/TopPanel';
import { MessageNotifier } from './components/MessageNotifier';
import { getDatabase, ref, onValue } from 'firebase/database';

// import { signInAndGetData } from './store/redux/firebase';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);
  const message = useSelector((state: RootState) => state.user.message);

  const navigate = useNavigate();
  const { currentUser } = auth;

  // move userBio as a permanent component
  return (
    <>
      {message && <MessageNotifier />}
      {user && <TopPanel />}
      <Routes>
        <Route path={'/*'} element={<MainPage />} />
        <Route path={'/login'} element={<AuthForm />} />
        <Route path={'/register'} element={<AuthForm />} />
      </Routes>
    </>
  );
}

export default App;
