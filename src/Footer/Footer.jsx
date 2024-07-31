import * as React from 'react';
import {Paper, BottomNavigation, Typography} from '@mui/material';
import Link from '@mui/material/Link';

export const Footer =() => {
  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (
    <Paper sx={{ position: 'relative', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
      >
        <Copyright sx={{ mt: 5 }} />
      </BottomNavigation>
    </Paper>
  );
}