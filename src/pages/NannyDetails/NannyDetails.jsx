import * as React from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import { instance} from '../../utils.ts';
import {useEffect, useState} from 'react';

export const NannyDetails =() => {

  const { id } = useParams();
  const [profile, setProfile ] = useState({});

  const getProfileDetails = () => instance.get(`/profiles/${id}`).then(({data}) => setProfile(data));

  useEffect( () => {
    getProfileDetails();
  }, []);

  console.log('profile', profile);
  console.log('id', id);

  return (
    <Grid xs={3}>
      {id}
    This is a specific profile {id}
    </Grid>
  );
};
