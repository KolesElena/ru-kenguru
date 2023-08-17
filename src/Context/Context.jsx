import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { SignIn } from '../SignIn/SignIn';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState(sessionStorage.getItem('token'));

  const saveToken = (token) => {
    setIsLogged(true);
    sessionStorage.setItem('token', token);
  };

  const value = {
    isLogged,
    token,
    saveToken
  };
  console.log(token);

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
