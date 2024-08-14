import * as React from 'react';
import { screen } from '@testing-library/react';
import Header from './Header.tsx';
import { startServer } from '../../tests/mock-server/index.js';
import { render } from '../../tests/utils.js';

describe('Header',() => {

  startServer();

  test('renders the Login and Sign Up buttons when the user is not logged', async () => {

    render(<Header />);

    const [login] = await screen.findAllByText('Login');
    const [signUp] = await screen.findAllByText('Sign Up');
   
    expect(login).toBeInTheDocument();
    expect(signUp).toBeInTheDocument();
    
  });

  test('renders the header menu when the user is logged', async () => {
    sessionStorage.setItem('token', '12334');

    render(<Header />);

    const option = await screen.findByText('Get Premium');
   
    expect(option).toBeInTheDocument();
    
  });
});

