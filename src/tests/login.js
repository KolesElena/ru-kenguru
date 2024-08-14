import * as React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import { SignIn } from '../SignIn/SignIn';
import { render, fireEvent, screen, waitFor } from './utils';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const fakeUserResponse = {token: 'fake_user_token'};
const server = setupServer(
  rest.post('http://localhost:3000/auth/login', (req, res, ctx) => {
    return res(ctx.json(fakeUserResponse));
  }),
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  window.sessionStorage.removeItem('token');
});
afterAll(() => server.close());

describe.skip('access the nannies list', () => {
  test('allows the user to login successfully', async () => {
    render(<SignIn />);
  
    // fill out the form
    fireEvent.change(screen.getByTestId('email').querySelector('input'), {
      target: {value: 'helena_uni'},
    });
    fireEvent.change(screen.getByTestId('password').querySelector('input'), {
      target: {value: 'norris'},
    });
  
    await fireEvent.click(screen.getByText('Sign In'));
  
    await waitFor(() => expect(sessionStorage.getItem('token')).toEqual(fakeUserResponse.token));
    
    expect(mockedUsedNavigate).toHaveBeenCalledWith(
      '/'
    );
  });
});
