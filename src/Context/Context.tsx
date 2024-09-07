import React, { useState, createContext, useEffect, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { AxiosInstance } from 'axios';
import { instance } from '../utils.ts';

// Define the structure for the login credentials
interface LoginCredentials {
  email: string;
  password: string;
}

// Define the structure for the sign-up data
interface SignUpData extends LoginCredentials {
  name: string;
  surname: string;
  userType: string;
  address: string;
  birthDate: string;
  photo: string;
}

// Define the props for the AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

// Define the structure for the auth context value
interface AuthContextValue {
  isLogged: boolean | null;
  token: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
}

// Create a default value that matches the AuthContextType
const defaultAuthContext: AuthContextValue= {
  isLogged: null,
  token: null,
  login: async () => {},
  signUp: async () => {},
};

declare const axiosInstance: AxiosInstance;

export const AuthContext = createContext<AuthContextValue>(defaultAuthContext);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLogged, setIsLogged] = useState<boolean | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = sessionStorage.getItem('token');

    if (savedToken) {
      instance.post('/auth/silent-login',{ token: savedToken} ).then(() => {
        setIsLogged(true);
        setToken(savedToken);
      });
    }
    else {
      setIsLogged(false);
    }
  }, []);

  const login = async ({ email, password }: LoginCredentials) => {
    const response = await instance.post('/auth/login', { email, password }).then(res => res.data);
    if (response) {
      saveToken(response.token);
    }
  };

  const signUp = async (formData: SignUpData ) => {
    console.log(formData.get('photo'))
    const response = await instance.post('/auth/sign-up', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  }).then(res => res.data);
    if (response) {
      saveToken(response.token);
    }
  };

  const saveToken = (token: string) => {
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
