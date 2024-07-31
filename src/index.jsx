import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route, redirect,
} from 'react-router-dom';
import './index.css';
import AuthProvider from './Context/Context';
import {SignIn} from './SignIn/SignIn';
import {SignUp} from './SignUp/SignUp';
import { Nannies } from './NanniesList/NanniesList';
import { NannyDetails } from './NannyDetails/NannyDetails';
import { Profile } from './Profile/Profile';
import VerifyCode from './VerifyCode/VerifyCode';
import Header from './Header/Header';
import { Footer } from './Footer/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme() ;

const root = ReactDOM.createRoot(
  document.getElementById('root') 
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={defaultTheme}>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Nannies />} />
              <Route path="/:id" element={<NannyDetails />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/verify-code/:code" element={<VerifyCode />} />
            </Routes>
            <Footer/>
          </div>
        </ThemeProvider>
      </AuthProvider>  
    </BrowserRouter>
  </React.StrictMode>
);



