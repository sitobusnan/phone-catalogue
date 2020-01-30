import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'


it('renders To Test', () => {
  const { getByText } = render(<BrowserRouter />);
  const linkElement = getByText(/To Test/i);
  expect(linkElement).toBeInTheDocument();
});
