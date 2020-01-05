import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders click me button', () => {
  const {getByText} = render(<App />);
  const buttonElement = getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('clicks click me button', () => {
  const lyrics = "They call the Fake Rising Sun";
  const {getByText} = render(<App />);
  const buttonElement = getByText(/click me/i);
  fireEvent.click(buttonElement);
  expect(screen.getByText(lyrics)).toBeInTheDocument()

});
