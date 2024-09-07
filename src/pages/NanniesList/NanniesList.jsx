import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { NannyCard } from '../../components/NannyCard/NannyCard';
import { instance} from '../../utils.ts';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const Nannies = () => {

  const [profiles, setProfiles ] = useState([ ]);

  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkppbCI6ImhlbGVuYV91bmlAbGl2ZS5ydSIsImlhdCI6MTY5MjAzNzIxMn0.QhiRhIxKN0erL7WVmYL_JNJJgcGFyDtFUbBPPMJEWPg';
  const token = null;

  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    axios.defaults.headers.common['Authorization'] = null;
  }

  const getProfiles = () => instance.get('/profiles').then(({data}) => setProfiles(data));

  useEffect( () => {
    getProfiles();
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <div data-testid='nannyTest'></div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {profiles.map((profile) => <NannyCard key={profile?._id} name={profile?.name} age={profile?.age} id={profile?._id} />)}
      </Grid>
    </Box>
  );
};

