import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../Context/Context.tsx';
import {Button, Select, Typography, Avatar} from '@mui/material';
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

export const FirstSignUpStep = ({onFinish}) => {

  const [userType, setUserType] = useState('');
  const [address, setAddress] = useState();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [values, setValues] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);

    setValues({
      ...values,
      [name]: value
    });
  };

  console.log('values', values);

  const addressOptions = [
    'Sant Cugat',
    'Barcelona',
    'Castelldefells',
  ];

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  console.log(address);

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
          First step
        </Typography>
        <Box component="form" onSubmit={() => onFinish(1, values, 2)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">I live in</InputLabel>
                <Select
                  labelId="address"
                  id="address"
                  name="address"
                  value={address}
                  label="I live in"
                  onChange={(e) => handleOnChange(e)}
                >
                  {addressOptions.map((address, index) => (<MenuItem key={index} value={address}>{address}</MenuItem>))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="First Name"
                id="name"
                name="name"
                onChange={(e) => handleOnChange(e)}
                error={nameError}
                helperText={
                  nameError ? 'Please enter your name' : ''
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                id="surname"
                label="Last Name"
                name="surname"
                onChange={(e) => handleOnChange(e)}
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                onChange={(e) => handleOnChange(e)}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => handleOnChange(e)}
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Next
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

