import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { SignIn } from '../SignIn/SignIn';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLogged, setIsLogged] = useState(null);
  const [token, setToken] = useState(null);

  const apiCall = (method, url, data, params, headers) => {
    return axios({
      method,
      url,
      data,
      params,
      headers,
    });
  };

  useEffect(() => {
    const savedToken = sessionStorage.getItem('token');

    if (savedToken) {
      apiCall('post', 'http://localhost:3000/auth/silent-login',{ token: savedToken} ).then(() => {
        setIsLogged(true);
        setToken(savedToken);
      });
    }
    else {
      setIsLogged(false);
    }
  }, []);

  const login = async ({ email, password }) => {
    const response = await apiCall('post', 'http://localhost:3000/auth/login', { email, password }).then(res => res.data);
    if (response) {
      saveToken(response.token);
    }
  };

  const signUp = async ({ email, password, name, surname, userType, address }) => {
    const response = await apiCall('post', 'http://localhost:3000/auth/sign-up',{ email, password, name, surname, userType, address }).then(res => res.data);
    if (response) {
      saveToken(response.token);
    }
  };

  const saveToken = (token) => {
    setIsLogged(true);
    sessionStorage.setItem('token', token);
  };

  const value = {
    isLogged,
    token,
    login,
    signUp
  };
  console.log(isLogged);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthProvider;   
