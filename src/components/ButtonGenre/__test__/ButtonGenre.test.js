import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonGenre from '..';

describe('ButtonGenre', () => {
  it('should render correctly with props', () => {
    const { container } = render(<ButtonGenre genre="Country" />);
    const button = container.querySelector('.button-genre');
    expect(button.textContent).toBe('Country');
    expect(container).toMatchSnapshot();
  });
});
