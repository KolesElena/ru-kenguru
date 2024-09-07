import { http, HttpResponse } from 'msw';
import mock from './mock.json';

export const handlers = [
  http.get('http://localhost:3001/profiles', () => {
    return HttpResponse.json(mock);
  }),
];
