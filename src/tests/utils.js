import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthProvider from '../Context/Context';
import { MemoryRouter } from 'react-router-dom';

const customRender = (ui) => {
  const Wrapper = ({ children }) => (
    <MemoryRouter><AuthProvider>{children}</AuthProvider></MemoryRouter>
  );

  return render(ui, {
    wrapper: Wrapper,
  });
};

export * from '@testing-library/react';
export { customRender as render };


