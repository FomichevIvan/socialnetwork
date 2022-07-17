import React, { ReactElement, SyntheticEvent, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { UserBio } from '../components/UserBio';
import { UserInfo } from '../components/UserInfo';
import { getDatabase, onValue, ref } from 'firebase/database';
import { showLoading, signInAsCurrUser } from '../store/redux/users';
import { PostsPage } from './PostsPage';
import { UserPhotoPage } from './UserPhotoPage';
import { GroupsPage } from './GroupsPage';
import { Layout } from '../components/Layout';
import { NotFound } from '../components/NotFound';

export const MainPage = (): ReactElement => {
  return (
    <>
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
    </>
  );
};
