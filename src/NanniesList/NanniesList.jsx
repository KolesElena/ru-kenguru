import React, { useState, useEffect} from 'react';
import axios from 'axios';

export const Nannies = () => {

  const [profiles, setProfiles ] = useState([ ]);

  const apiCall = (method, url, data, params, headers) => {
    return axios({
      method,
      url,
      data,
      params,
      headers,
    });
  };

  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkppbCI6ImhlbGVuYV91bmlAbGl2ZS5ydSIsImlhdCI6MTY5MjAzNzIxMn0.QhiRhIxKN0erL7WVmYL_JNJJgcGFyDtFUbBPPMJEWPg';
  const token = null;

  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    axios.defaults.headers.common['Authorization'] = null;
  }

  const getProfiles = () => apiCall(
    'get', 
    'http://localhost:3000/profiles',
  ).then(res => setProfiles(res.data));

  useEffect(() => {
    getProfiles();
  }, []);

  console.log(profiles);
  
  return (
    <h1 data-testid='nannies_list' className="text-3xl font-bold">
      List of Nanies
    </h1>
  );
};

