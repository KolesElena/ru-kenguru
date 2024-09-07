import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('http://localhost:3001/auth/sign-up', async({request}) => {
   
      return new HttpResponse({
          "$__": {
              "activePaths": {
                  "paths": {
                      "verified": "require",
                      "subscribeDate": "require",
                      "password": "require",
                      "email": "require",
                      "name": "require"
                  },
                  "states": {
                      "require": {
                          "verified": true,
                          "subscribeDate": true,
                          "password": true,
                          "email": true,
                          "name": true
                      },
                      "default": {},
                      "modify": {}
                  }
              },
              "op": null,
              "saving": null,
              "$versionError": null,
              "saveOptions": null,
              "validating": null,
              "cachedRequired": {},
              "backup": {
                  "activePaths": {
                      "modify": {
                          "name": true,
                          "surname": true,
                          "userType": true,
                          "role": true,
                          "address": true,
                          "email": true,
                          "password": true
                      },
                      "default": {
                          "verified": true,
                          "_id": true,
                          "subscribeDate": true
                      }
                  },
                  "validationError": null
              },
              "inserting": true,
              "savedState": {}
          },
          "_doc": {
              "name": "Svetlana",
              "surname": "Test",
              "userType": "nanny",
              "role": "66bd13905dfbcdf356e106ba",
              "address": "Sant Cugat",
              "email": "svetlana@test.com",
              "password": "123",
              "verified": false,
              "_id": "66c76d021c6f038a4a4014d9",
              "subscribeDate": "2024-08-22T16:53:22.262Z",
              "__v": 0
          },
          "$isNew": false,
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN2ZXRsYW5hQHRlc3QuY29tIiwiX2lkIjoiNjZjNzZkMDIxYzZmMDM4YTRhNDAxNGQ5IiwiaWF0IjoxNzI0MzQ1NjAyfQ.J401fg3MH9e5Fm8pBsl0M1cYHcw-lhImkSzt1-lw12I"
      }, { status: 200 }); 
  }),
];
