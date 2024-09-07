import { setupServer } from 'msw/node';

import handlers from './handlers';

export const startServer = () => {
  const server = setupServer(...handlers);

  beforeEach(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  return { server };
};


