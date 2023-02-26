import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Body from '..';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('Body', () => {
  it('should render the text when mounted', () => {
    render(<Body />);
    expect(screen.queryByText('seems a bit empty in here ...')).toBeTruthy();
  });

  it('should navigate to /songs when the button is clicked', () => {
    render(<Body />);
    const button = screen.getByText('Sync');
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith('/songs');
  });

  it('should render correctly', () => {
    const { container } = render(<Body />);
    expect(container).toMatchSnapshot();
  });
});
