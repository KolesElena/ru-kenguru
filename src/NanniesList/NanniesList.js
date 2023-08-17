import React, { useState, useEffect} from 'react';
import axios from 'axios';
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

export const Nannies = () => {

  const [profiles, setProfiles ] = useState([ ]);

  const apiCall = (method, url, data, params, headers) => {
    return axios({
      method,
      url,
      data,
      params,
      headers,
    });
  };

  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkppbCI6ImhlbGVuYV91bmlAbGl2ZS5ydSIsImlhdCI6MTY5MjAzNzIxMn0.QhiRhIxKN0erL7WVmYL_JNJJgcGFyDtFUbBPPMJEWPg';
  const token = null;

  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    axios.defaults.headers.common['Authorization'] = null;
  }

  const getProfiles = () => apiCall(
    'get', 
    'http://localhost:3000/profiles',
  ).then(res => setProfiles(res.data));

  useEffect(() => {
    getProfiles();
  }, []);

  console.log(profiles);
  
  return (
    <h1 className="text-3xl font-bold">
      List of Nanies
    </h1>
  );
};

