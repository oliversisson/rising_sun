import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('renders click me button', () => {
  const {getByText} = render(<App />);
  const buttonElement = getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('clicks click me button', () => {
  const {getByText} = render(<App />);
  const buttonElement = getByText(/click me/i);
  fireEvent.click(buttonElement);
  expect(getByText(/they call the rising sun/i)).toBeInTheDocument()

});
