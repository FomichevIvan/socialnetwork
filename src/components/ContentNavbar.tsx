import React, { ReactElement, SyntheticEvent } from 'react';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ContentNavbar = (): ReactElement => {
  const navigate = useNavigate();

  const headTo = (e: SyntheticEvent): void => {
    const { id } = e.target as HTMLButtonElement;
    navigate(id);
  };
  return (
    <>
      {/*<div className="container-navbar">*/}
      {/*  <Button fullWidth={true} id="" onClick={headTo}>*/}
      {/*    Home*/}
      {/*  </Button>*/}
      {/*  <Button fullWidth={true} id="posts" onClick={headTo}>*/}
      {/*    Posts*/}
      {/*  </Button>*/}
      {/*  <Button fullWidth={true} id="photo" onClick={headTo}>*/}
      {/*    Photos*/}
      {/*  </Button>*/}
      {/*  <Button fullWidth={true} id="groups" onClick={headTo}>*/}
      {/*    Groups*/}
      {/*  </Button>*/}
      {/*</div>*/}

      <Grid
        container
        rowSpacing={8}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        // xs={12}
      >
        <Grid item xs={6} className="menu-button">
          <Button fullWidth={true} id="" onClick={headTo}>
            Home
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth={true} id="posts" onClick={headTo}>
            Posts
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth={true} id="photo" onClick={headTo}>
            Photos
          </Button>
        </Grid>
        <Grid item xs={6} className="menu-button">
          <Button fullWidth={true} id="groups" onClick={headTo}>
            Groups
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
