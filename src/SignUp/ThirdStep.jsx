import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { Button, Select, Typography, Avatar, FormLabel } from '@mui/material';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DatePickerComponent } from '../components/DatePicker';
import { DatePicker } from 'antd';
import { ChooseLanguage } from '../components/ChooseLanguage';

export const ThirdSignUpStep = ({onFinish}) => {

  const [userType, setUserType] = useState('');
  const [address, setAddress] = useState();

  const {signUp} = useContext(AuthContext);  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    signUp({ email: data.get('email'), password: data.get('password'), name: data.get('firstName'), surname: data.get('lastName'), photo: data.get('photo'), userType: userType, address: address}).then();
    console.log( signUp({ email: data.get('email'), password: data.get('password'), name: data.get('firstName'), surname: data.get('lastName'), photo: data.get('photo'), userType: userType, address: address}).then());
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
          Third step
        </Typography>
        <Box component="form" noValidate onSubmit={(event) => onFinish(3, event, null)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <FormLabel id="demo-simple-select-label">Date of Birth</FormLabel>
                <DatePickerComponent />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <FormLabel id="demo-radio-buttons-group-label">What languages do you speak?</FormLabel>
                <ChooseLanguage />
              </FormControl>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Complete registration
            </Button>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

