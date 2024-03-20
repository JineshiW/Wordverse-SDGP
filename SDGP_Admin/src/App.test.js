// Import necessary functions and components from the testing-library/react library
import { render, screen } from '@testing-library/react';
// Import the main component of the application to be tested
import App from './App';

// Define a test case using the test function provided by Jest
test('renders learn react link', () => {
  // Render the main component of the application
  render(<App />);
  // Use screen.getByText() to find an element with the text 'learn react' (case insensitive)
  const linkElement = screen.getByText(/learn react/i);
  // Use Jest's expect() function to make assertions about the element
  // Check if the 'learn react' link is present in the rendered component
  expect(linkElement).toBeInTheDocument();
});
