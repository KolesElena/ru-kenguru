import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

export const NannyCard =({image, name, age, id}) => {
  const navigate = useNavigate();

  const fields = [
    name, age
  ];

  return (
    <Grid xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title="green iguana"
        />
        <CardContent>
          {fields.map((field) => <Typography gutterBottom variant="h5" component="div">
            {field}
          </Typography>)}
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" onClick={() => navigate(`/${id}`)}>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
