import React, { ReactElement, SyntheticEvent } from 'react';
import { Button, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { signOutUserAsync } from '../store/redux/firebase';
import { auth } from '../index';
import { UserDashboard } from './UserDashboard';
import { IoHomeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export const TopPanel = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const headTo = (e: SyntheticEvent): void => {
    const { id } = e.target as HTMLButtonElement;
    navigate(id);
  };

  return (
    <div className="container-top">
      <i className="home-button">
        <IoHomeOutline onClick={headTo} id="" size={25} color="darkslateblue" />{' '}
      </i>
      <UserDashboard />
    </div>
  );
};
