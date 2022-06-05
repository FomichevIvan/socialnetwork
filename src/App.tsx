import React from 'react';
import PostContainer from './components/containers/PostContainer';

import './App.css';
import { AuthForm } from './components/presentational/AuthForm';
import { useSelector } from 'react-redux';
import { RootState } from './store/redux/store';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useFirebase } from './hooks/useFirebase';
import { MainPage } from './components/pages/MainPage';

function App() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/login'} element={<AuthForm />} />
        <Route path={'/register'} element={<AuthForm />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <div className={'main-cont'}>
    //     <PostContainer />
    //     {!user && <AuthForm />}
    //     {user && `Hello, ${user.uid}!`}
    //   </div>
    // </div>
  );
}

export default App;
