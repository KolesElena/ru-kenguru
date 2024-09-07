import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const ChooseLanguage = ({checked}) => {
  const languages = ['Russian', 'Spanish', 'English'];

  return (
    <FormGroup>
      {languages.map((language) => (<FormControlLabel key={language} control={<Checkbox checked={checked}/>} label={language} />))}
    </FormGroup>
  );
};
