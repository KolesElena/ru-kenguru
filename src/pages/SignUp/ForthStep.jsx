+import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/Context.tsx';
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
import { DatePickerComponent } from '../../components/DatePicker.jsx';
import { ChooseLanguage } from '../../components/ChooseLanguage.jsx';

export const ThirdSignUpStep = ({onFinish}) => {

  const [userType, setUserType] = useState('');
  const [address, setAddress] = useState();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forth step
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Button
              variant="contained"
              component="label"
            >
              Upload File
              <input
                type="file"
                hidden
                name="photo"
              />
            </Button>
            <img src={currentProfile?.photo} width='100px'/>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save photo
          </Button>
        </Box >
    </Container>
  );
};

