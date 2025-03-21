import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import App from './src/App';

describe('App Component', () => {
  test('renders header navigation', () => {
    render(
      
        <App />
      
    );

    // Check if navigation links are rendered
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  });

  test('shows 404 page for unknown routes', () => {
    
    window.history.pushState({}, '', '/bad-route');

    render(
      
        <App />
      
    );

    // Check if the 404 page is rendered
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Return to Home/i)).toBeInTheDocument();
  });

  test('navigates to About page', () => {
    render(
      
        <App />
      
    );

    // Simulate clicking the About link
    fireEvent.click(screen.getByRole('link', { name: /about/i }));

    
    expect(screen.getByText(/About Me/i)).toBeInTheDocument(); // Match the exact text in your component
  });
});