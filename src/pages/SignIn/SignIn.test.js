import * as React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SignIn } from './SignIn.jsx';
import { startServer } from '../../tests/mock-server/index.ts';
import { render } from '../../tests/utils';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Sign In',() => {

  startServer();

  test('when user logged it redirects to the homepage', async () => {
    render(<SignIn />);
    const [getEmail] = screen.getAllByLabelText('Email');
    const [getPassword] = screen.getAllByLabelText('Password');
    await userEvent.type(getEmail, 'user@gmail.com');
    await userEvent.type(getPassword, '123');
    await userEvent.click(screen.getByText('Sign In'));
    expect(mockedUseNavigate).toHaveBeenCalledWith('/');
  });
});

