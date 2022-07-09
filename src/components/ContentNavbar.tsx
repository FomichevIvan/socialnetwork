import React, { ReactElement, SyntheticEvent } from 'react';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MenuButton } from '../ui-kit/MenuButton';

export const ContentNavbar = (): ReactElement => {
  const navigate = useNavigate();

  const headTo = (e: SyntheticEvent): void => {
    const { id } = e.target as HTMLButtonElement;
    navigate(id);
  };
  return (
    <>
      <div className="container-navbar">
        <div className="inner-container-navbar">
          <MenuButton
            fontColor="black"
            text="Home"
            background="#FF8CCD"
            containerBckgr="#FFBFDC"
            textColor="white"
            onClick={headTo}
            id=""
          />

          <MenuButton
            fontColor="black"
            text="Posts"
            background="#FFA68C"
            containerBckgr="#FFCDBF"
            textColor="white"
            onClick={headTo}
            id="posts"
          />
        </div>
        <div className="inner-container-navbar">
          <MenuButton
            fontColor="black"
            text="Photos"
            background="#B199FF"
            containerBckgr="#D4C6FF"
            textColor="white"
            onClick={headTo}
            id="photo"
          />

          <MenuButton
            fontColor="black"
            text="Groups"
            background="#98B7FF"
            containerBckgr="#C6D7FF"
            textColor="white"
            onClick={headTo}
            id="groups"
          />
        </div>
      </div>
    </>
  );
};
