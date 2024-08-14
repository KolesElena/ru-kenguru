import * as React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SignIn } from './SignIn.jsx';
import { startServer } from '../../tests/mock-server/index.js';
import { render } from '../../tests/utils.js';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Sign In',() => {

  startServer();

  test('when user logged it redirects to the homepage', async () => {
    render(<SignIn />);
    const email = 'user@gmail.com';
    const password = '123';
    await userEvent.type(screen.getByLabelText('Email', {selector: 'input'}), email);
    await userEvent.type(screen.getByLabelText('Password', {selector: 'input'}), password);
    await userEvent.click(screen.getByText('Sign In'));
    expect(mockedUseNavigate).toHaveBeenCalledWith('/');
  });
});

