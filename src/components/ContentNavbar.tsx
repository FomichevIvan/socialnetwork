import React, { ReactElement, SyntheticEvent } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ContentNavbar = (): ReactElement => {
  const navigate = useNavigate();

  const headTo = (e: SyntheticEvent): void => {
    const { id } = e.target as HTMLButtonElement;
    navigate(id);
  };
  return (
    <>
      <div className="right-container-navbar">
        <Button id="posts" onClick={headTo}>
          Posts
        </Button>
        <Button id="photo" onClick={headTo}>
          Photos
        </Button>
        <Button id="groups" onClick={headTo}>
          Groups
        </Button>
      </div>
    </>
  );
};
