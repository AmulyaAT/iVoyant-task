import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('renders Hello component with name', () => {
  render(<Hello name="John" />);
  
  const headingElement = screen.getByText(/Hello, John!/i);
  expect(headingElement).toBeInTheDocument();
});