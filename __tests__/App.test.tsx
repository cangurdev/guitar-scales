import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';


describe('App', () => {
  test('renders the app and interacts with options', () => {
    
    render(<App />);

    // Verify initial state
    expect(screen.getByText(/Scale/i)).toBeInTheDocument();
    expect(screen.getByText(/Chords/i)).toBeInTheDocument();
    
    // Interact with the options component
    const noteDropdown  = screen.getByTestId('note-options');
    const scaleDropdown = screen.getByTestId('scale-options');

    userEvent.selectOptions(noteDropdown, 'D');
    expect(screen.getByText(/D-E-F#-G-A-B-C#-D/i)).toBeInTheDocument();

    userEvent.selectOptions(scaleDropdown, 'minor');
    expect(screen.getByText(/D-E-F-G-A-A#-C-D/i)).toBeInTheDocument();
  });
});
