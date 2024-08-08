import {  screen, waitFor, act } from '@testing-library/react';
import { SignIn } from './SignIn.jsx';
import { startServer } from '../tests/mock-server';
import { render } from '../tests/utils.js';

describe('Sign In',() => {

  startServer();

  test('', () => {
    render(<SignIn />);
  });
});

