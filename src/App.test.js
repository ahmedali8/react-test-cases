import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders hello ahmed', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Ahmed/i);
  expect(linkElement).toBeInTheDocument();
});
