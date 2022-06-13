import { ReactElement, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
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

export const MainPage = (): ReactElement => {
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
        <div className="right-container"> какой-то контент</div>
      </div>
    </div>
  );
};
