import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme() ;

export const SignUp = () => {

  const [profiles, setProfiles ] = useState([ ]);
  const [userType, setUserType] = useState('');
  const [address, setAddress] = useState();

  const apiCall = (method, url, data, params, headers) => {
    return axios({
      method,
      url,
      data,
      params,
      headers,
    });
  };

  const getProfiles = () => apiCall('get', 'http://localhost:3000/profiles').then(res => setProfiles(res.data));

  const deleteProfile = () => apiCall('patch', 'http://localhost:3000/profiles/6430790b56ac13f4339583b4',{ name: 'Elena'} ).then(res => res.data);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    apiCall('post', 'http://localhost:3000/profiles',{ email: data.get('email'), password: data.get('password'), name: data.get('firstName'), surname: data.get('lastName'), userType: userType, address: address} ).then(res => res.data);
    getProfiles();
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      userType: data.get('userType'),
    });
  };

  const addressOptions = [
    'Sant Cugat',
    'Barcelona',
    'Castelldefells',
  ];

  const handleUserTypeChange = (event, type) => {
    setUserType(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  console.log(userType);

  return (
    <ThemeProvider theme={defaultTheme}>
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">I am</InputLabel>
                  <Select
                    labelId="userType"
                    id="userType"
                    value={userType}
                    label="I am"
                    autoFocus
                    onChange={handleUserTypeChange}
                  >
                    <MenuItem value='parent'>Parent</MenuItem>
                    <MenuItem value='service'>Nanny</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">I live in</InputLabel>
                  <Select
                    labelId="userType"
                    id="userType"
                    value={address}
                    label="I live in"
                    onChange={handleAddressChange}
                  >
                    {addressOptions.map((address, index) => (<MenuItem key={index} value={address}>{address}</MenuItem>))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(target) => {}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
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
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* <div>{profiles?.map((person) => (<><div>name</div><div>{person.name}</div><div>id</div><div>{person._id}</div></>))}
      </div>  */}
    </ThemeProvider>
  );
};

