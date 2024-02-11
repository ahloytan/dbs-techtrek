import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Box, Unstable_Grid2 as Grid } from '@mui/material';

export const Layout = (props) => {
  const { children } = props;

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto'
      }}
    >
      <Grid
        container
        sx={{ flex: '1 1 auto' }}
      >
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%'
            }}
          >
            <Box
              component={NextLink}
              href="/"
              sx={{
                display: 'inline-flex',
                height: 48,
                width: 48
              }}
            >
              <img src="/assets/khk.webp" alt="khk" className="rounded-full"/>
            </Box>
          </Box>
          {children}
        </Grid>
        <Grid
          xs={false}
          sm={12}
          lg={6}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh'
          }}
        />
      </Grid>
    </Box>
  );
};

Layout.prototypes = {
  children: PropTypes.node
};