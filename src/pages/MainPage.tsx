import React, {
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useEffect,
} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
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
import { UserBio } from '../components/UserBio';
import { UserInfo } from '../components/UserInfo';
import { getDatabase, onValue, ref } from 'firebase/database';
import { signInAsCurrUser } from '../store/redux/users';
import { PostsPage } from './PostsPage';
import { UserPage } from './UserPage';
import { GroupsPage } from './GroupsPage';

export const MainPage = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const headTo = (e: SyntheticEvent) => {
    const { id } = e.target as HTMLButtonElement;
    navigate(id);
  };

  const { currentUser } = auth;

  const getUserData = (uid: string) => {
    const db = getDatabase();
    const userRef = ref(db, `users/${uid}`);
    return onValue(userRef, snapshot => {
      console.log('vall');
      const data = snapshot.val();
      data && dispatch(signInAsCurrUser(data));
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        getUserData(user.uid);
      } else {
        navigate('/login'); // protected route
      }
    });
    return () => {
      console.log('return');
      unsubscribe();
    };
  }, [currentUser]);
  return (
    <div className="main-page-container">
      <div>
        <h1>Starting Page</h1>
      </div>
      <div className="sub-container">
        <div className="left-container">
          <UserBio />
          <UserInfo />
        </div>
        <div className="right-container">
          <div className="right-container-navbar">
            <Button id="posts" onClick={headTo}>
              Posts
            </Button>
            <Button id="user" onClick={headTo}>
              User Info
            </Button>
            <Button id="groups" onClick={headTo}>
              Groups
            </Button>
          </div>
          <Routes>
            <Route path="posts" element={<PostsPage />} />
            <Route path="user" element={<UserPage />} />
            <Route path="groups" element={<GroupsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

// перенести разметку на уровень Апп, чтобы основной контент менялся в зависисмости от роутинга, а левая панель
// оставалсь, если юзер есть.

// move to firebase update function
// previous HW
