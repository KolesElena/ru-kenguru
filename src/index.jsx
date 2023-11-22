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
import VerifyCode from './VerifyCode/VerifyCode';
import Header from './Header/Header';
const root = ReactDOM.createRoot(
  document.getElementById('root') 
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Nannies />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<div>Profile</div>} />
            <Route path="/verify-code/:code" element={<VerifyCode />} />
          </Routes>
        </div>
      </AuthProvider>  
    </BrowserRouter>
  </React.StrictMode>
);



