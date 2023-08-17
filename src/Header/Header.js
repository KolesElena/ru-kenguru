import React, { useContext} from 'react';
import { AuthContext } from '../Context/Context';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Header = () => {

  const { isLogged } = useContext(AuthContext);

  if (!isLogged) {
    return (
      <>
        <Link href="/login" variant="body2">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
    Sign In
          </Button>
        </Link>
        <Link href="/signup" variant="body2">
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
    <Link href="/profile" variant="body2">
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
