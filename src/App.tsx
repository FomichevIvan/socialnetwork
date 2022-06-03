import React from 'react';
import PostContainer from './components/containers/PostContainer';

import './App.css';
import { AuthForm } from './components/presentational/AuthForm';
import { useSelector } from 'react-redux';
import { RootState } from './store/redux/store';
import { useFirebase } from './hooks/useFirebase';

function App() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className="App">
      <div className={'main-cont'}>
        <PostContainer />
        {!user && <AuthForm />}
        {user?.uid && `Hello, ${user.uid}!`}
      </div>
    </div>
  );
}

export default App;
