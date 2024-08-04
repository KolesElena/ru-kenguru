import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter, Routes, Route,
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
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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
)
