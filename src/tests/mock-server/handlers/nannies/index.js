import { http, HttpResponse } from 'msw';
import mock from './mock';

export const handlers = [
  http.get('http://localhost:3001/profiles', () => {
    return HttpResponse.json(mock);
  }),
];