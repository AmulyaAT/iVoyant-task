import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides matchers like toBeInTheDocument()
import App from './App';

describe('App Component', () => {
  test('renders simple text element', () => {
    render(<App />);
    
    // Check if the text 'Simple Text Element' is rendered
    const textElement = screen.getByText('Simple Text Element');
    expect(textElement).toBeInTheDocument();
  });
});
