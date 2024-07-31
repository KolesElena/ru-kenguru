import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
import { Nannies } from './NanniesList';
import { startServer } from '../tests/mock-server';

import { TextEncoder } from 'node:util';

global.TextEncoder = TextEncoder;

describe('Nannies list',() => {

  startServer();

  test('renders the list of nannies', async () => {
    // Render the component
    render(<Nannies />);

    const card = await screen.findByText('Elena');

    expect(card).toBeInTheDocument();
  });
});

