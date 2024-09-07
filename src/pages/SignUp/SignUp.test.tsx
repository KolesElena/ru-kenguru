import * as React from 'react';
import {  screen, waitFor, act } from '@testing-library/react';
import { SignUp } from './SignUp.tsx';
import userEvent from '@testing-library/user-event';
import { startServer } from '../../tests/mock-server/index.ts';
import { render } from '../../tests/utils';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Sign up',() => {

  startServer();

  test('renders first step', async () => {
    // Render the component
    render(<SignUp />);

    const [password] = await screen.findAllByLabelText('Password');

    expect(password).toBeInTheDocument();
  });

  test('renders second step', async () => {
    // Render the component
    render(<SignUp />);
    const [getFirstName] = screen.getAllByLabelText(/First Name/i);
    const [getLastName] = screen.getAllByLabelText(/Last Name/i);
    const [getEmail] = screen.getAllByLabelText(/Email/i);
    // const [getPassword] = screen.getAllByLabelText(/Password/i);
    await userEvent.type(getFirstName, 'Marina');
    await userEvent.type(getLastName, 'Pechenkina');
    await userEvent.type(getEmail, 'test@gmail.com');
    // await userEvent.type(getPassword, '123');
    await userEvent.click(screen.getByText('Next'));

    expect(screen.getByText('Parent')).toBeInTheDocument();
    expect(screen.getByText('Nanny')).toBeInTheDocument();
  });

  test('creates a profile', async () => {
    // Render the component
    render(<SignUp />);
    expect(mockedUseNavigate).toHaveBeenCalledWith('/');
  });
});

