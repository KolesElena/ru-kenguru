import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './index.css';
import AuthProvider from './Context/Context.tsx';
import {SignIn} from './pages/SignIn/SignIn';
import {SignUp} from './pages/SignUp/SignUp.js';
import { Nannies } from './pages/NanniesList/NanniesList.jsx';
import { NannyDetails } from './pages/NannyDetails/NannyDetails.jsx';
import { Profile } from './pages/Profile/Profile.jsx';
import VerifyCode from './VerifyCode/VerifyCode';
import Header from './components/Header/Header.tsx';
import { Footer } from './components/Footer/Footer.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const defaultTheme = createTheme() ;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={defaultTheme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
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
          </LocalizationProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
