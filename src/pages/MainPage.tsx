import React, { ReactElement, SyntheticEvent, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { Button } from '@mui/material';
import { auth } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { UserBio } from '../components/UserBio';
import { UserInfo } from '../components/UserInfo';
import { getDatabase, onValue, ref } from 'firebase/database';
import { showLoading, signInAsCurrUser } from '../store/redux/users';
import { PostsPage } from './PostsPage';
import { UserPhotoPage } from './UserPhotoPage';
import { GroupsPage } from './GroupsPage';
import { Layout } from '../components/Layout';
import { ContentNavbar } from '../components/ContentNavbar';
import { NotFound } from '../components/NotFound';
import { Loader } from '../components/Loader';
import { AuthRequired } from '../components/AuthRequired';

export const MainPage = (): ReactElement => {
  const loading = useSelector((state: RootState) => state.user.loading);
  const { currentUser } = auth;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const getUserData = (uid: string) => {
    dispatch(showLoading(true));
    const db = getDatabase();
    const userRef = ref(db, `users/${uid}`);
    return onValue(userRef, snapshot => {
      console.log('onValue is getting data');
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
      unsubscribe();
    };
  }, [currentUser]);
  return (
    <>
      {!loading && (
        <div className="main-page-container">
          <div className="sub-container">
            <div className="left-container">
              <UserBio />
              <UserInfo />
            </div>
            <div className="right-container">
              <Routes>
                <Route index element={<Layout />} />
                <Route path="posts" element={<PostsPage />} />
                <Route path="photo" element={<UserPhotoPage />} />
                <Route path="groups" element={<GroupsPage />} />
                <Route path={'*'} element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
