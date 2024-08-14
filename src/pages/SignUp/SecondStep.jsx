import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/Context.tsx';
import {Button, Select, Typography, Avatar, Stack} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';

export const SecondSignUpStep = ({ onFinish }) => {

  const [userType, setUserType] = useState({userType: ''});

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={() => onFinish(2, userType, 3)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Stack direction="row" spacing={2}>
                  <Button type="submit" fullWidth sx={{ mt: 3, mb: 2 }} variant="contained" onClick={(e) => setUserType({'userType': 'nanny'})}>Nanny</Button>
                  <Button type="submit" fullWidth sx={{ mt: 3, mb: 2 }} variant="contained" onClick={() => setUserType({'userType': 'parent'})}>Parent</Button>
                </Stack>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

