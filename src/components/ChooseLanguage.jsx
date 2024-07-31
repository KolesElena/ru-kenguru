import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const ChooseLanguage = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Russian" />
      <FormControlLabel control={<Checkbox />} label="Spanish" />
      <FormControlLabel control={<Checkbox />} label="English" />
    </FormGroup>
  );
};
