import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:3001/login', async({request}) => {
    const { email, password } = await request.json();
    if (email === 'user@gmail.com' && password === '123') {
      return new HttpResponse(null, { status: 200 })
    } else {
      return new HttpResponse(null, { status: 401 })
    }
  }),
];