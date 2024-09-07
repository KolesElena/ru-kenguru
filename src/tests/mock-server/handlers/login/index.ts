import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('http://localhost:3001/auth/login', async({request}) => {
    const { email, password } = await request.json();
    if (email === 'user@gmail.com' && password === '123') {
      return new HttpResponse(null, { status: 200 });
    } else {
      return new HttpResponse(null, { status: 401 });
    }
  }),
  http.post('http://localhost:3001/auth/silent-login', async({request}) => {
    const { token } = await request.json();
    if (token) {
      return new HttpResponse({
        'email': 'helena_uni@live.ru',
        '_id': '64d3be1eda1dc3c3c6f1149d',
        'verified': false
      }, { status: 200 });
    } else {
      return new HttpResponse(null, { status: 401 });
    }
  }),
];
