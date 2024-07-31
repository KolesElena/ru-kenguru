import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/Context';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const instance = axios.create({baseURL: 'http://localhost:3001'});

export const Profile = () => {

  const navigate = useNavigate();
  const {login, isLogged, token} = useContext(AuthContext);
  instance.defaults.headers.common.Authorization = token;
  const [currentProfile, setCurrentProfile] = useState(null);

  const handleSubmit = async (event) => {
  
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get('photo')); 
    await instance.put('/profiles/photo', data); 
    const currentProfile = await instance.get('/profiles/current');
    setCurrentProfile(currentProfile?.data);

  };
  // useEffect(() => {
  //   if (isLogged) {
  //     navigate('/');
  //   }
  // }, [isLogged]);

  useEffect(() => {
    const currentProfile = instance.get('/profiles/current').then(({data}) => setCurrentProfile(data));
  }, []);

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
          Sign in
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
            Save photo
          </Button>
        </Box >
      </Box>
    </Container>
  );
};

