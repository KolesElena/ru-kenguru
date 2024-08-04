import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthProvider from '../Context/Context';
import {
  BrowserRouter, MemoryRouter,
} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

const defaultTheme = createTheme() ;

const customRender = (ui) => {
  const Wrapper = ({ children }) => (
    <MemoryRouter>
      <AuthProvider>
        <ThemeProvider theme={defaultTheme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
          </LocalizationProvider>
        </ThemeProvider>
      </AuthProvider>
    </MemoryRouter>
  );

  return render(ui, {
    wrapper: Wrapper,
  });
};

export const ProviderWrapper = ({ children }) => (
      <BrowserRouter>
        {children}
      </BrowserRouter>
);

export * from '@testing-library/react';
export * as React from 'react';
export { customRender as render };


