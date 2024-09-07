import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../Context/Context.tsx';
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
import  DatePickerComponent  from '../../../components/DatePicker.tsx';
import { ChooseLanguage } from '../../../components/ChooseLanguage.jsx';

export const ThirdSignUpStep = ({onFinish}) => {


  const [birthDate, setBirthDate] = useState();
  const [languages, setLanguages] = useState();
  const [thirdStepData, setThirdStepData] = useState({'birthDate': birthDate, 'languages': languages});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log('birthDate', data.get('birthDate'));
    // return ({birthDate: data.get('birthDate'), languages: data.get('languages')});
  };

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
        <Box component="form" noValidate onSubmit={(event) =>{ onFinish(3, {'birthDate': birthDate}, 4)}} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <FormLabel name='birthDate'>Date of Birth</FormLabel>
                <DatePickerComponent name='birthDate' onChange={(event) => setBirthDate(event)} value={birthDate}/>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <FormLabel id="demo-radio-buttons-group-label" name='languages'>What languages do you speak?</FormLabel>
                <ChooseLanguage checked={(event) => console.log('event', event)} />
              </FormControl>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

