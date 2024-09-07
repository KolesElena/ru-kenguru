import React, { useState, useContext } from 'react';
import { Button, Typography, Avatar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';

export const ForthSignUpStep = ({onFinish}) => {

  const [image, setImage] = useState();

  const onFormFinish = (target) => {
    const formData = new FormData(target);
    

    return {
      photo: formData.get('photo'),
    }
  }

  const handleFileChange = (
    event
  ) => {
   const file = event.target.files;
   console.log('file', file?.[0]);
     setImage({photo: file?.[0]});
    };

//   var formData = new FormData();
// var imagefile = document.querySelector('#file');
// formData.append("image", imagefile.files[0]);
// axios.post('upload_file', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
// })

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forth step
        </Typography>
        <Box component="form" noValidate onSubmit={(event) => { onFinish(4,  image, null)} } sx={{ mt: 3 }}>
        
          <Grid container spacing={2}>
            <Button
              variant="contained"
              component="label"
            >
              Upload File
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                name="photo"
              />
            </Button>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Complete registration
          </Button>
        </Box >
    </Container>
  );
};

