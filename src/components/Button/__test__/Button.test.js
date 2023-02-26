import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '..';

describe('Button', () => {
  it('should render the button', () => {
    const setIsClicked = jest.fn();
    const { getByText } = render(<Button setIsClicked={setIsClicked} />);
    expect(getByText('Sync')).toBeTruthy();
    const button = screen.getByText('Sync');
    fireEvent.click(button);
    expect(setIsClicked).toHaveBeenCalledTimes(1);
  });
});
