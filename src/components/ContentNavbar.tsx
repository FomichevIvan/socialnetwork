import React, { ReactElement, SyntheticEvent } from 'react';
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
            text="Home"
            buttonColor="#FF8CCD"
            containerColor="#FFBFDC"
            textColor="white"
            onClick={headTo}
            id=""
          />

          <MenuButton
            text="Posts"
            buttonColor="#FFA68C"
            containerColor="#FFCDBF"
            textColor="white"
            onClick={headTo}
            id="posts"
          />
        </div>
        <div className="inner-container-navbar">
          <MenuButton
            text="Photos"
            buttonColor="#B199FF"
            containerColor="#D4C6FF"
            textColor="white"
            onClick={headTo}
            id="photo"
          />

          <MenuButton
            text="Groups"
            buttonColor="#98B7FF"
            containerColor="#C6D7FF"
            textColor="white"
            onClick={headTo}
            id="groups"
          />
        </div>
      </div>
    </>
  );
};
