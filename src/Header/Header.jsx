import React, { useContext} from 'react';
import { AuthContext } from '../Context/Context';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const Header = () => {

  const { isLogged } = useContext(AuthContext);

  if (!isLogged) {
    return (
      <>
        <Link to="/login">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
    Sign In
          </Button>
        </Link>
        <Link to="/signup">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
   Sign Up
          </Button>
        </Link>
      </>
    );
  }
  return (
    <Link to="/profile">
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
Profile
      </Button>
    </Link>
  );
};

export default Header;
