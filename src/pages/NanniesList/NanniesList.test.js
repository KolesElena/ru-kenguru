import * as React from 'react';
import {  screen, waitFor, act } from '@testing-library/react';
import { Nannies } from './NanniesList.jsx';
import { startServer } from '../../tests/mock-server/index.js';
import { render } from '../../tests/utils.js';

describe('Nannies list',() => {

  startServer();

  test('renders the list of nannies', async () => {
    // Render the component
    render(<Nannies />);

    const card = await screen.findByText('Elena');

    expect(card).toBeInTheDocument();
  });

  test('renders the div nannyTest', () => {
    // Render the component
    render(<Nannies/>);
    act(async () => {
      const card = await screen.getByTestId('nannyTest');

      expect(card).toBeInTheDocument();

    });
  });
});

