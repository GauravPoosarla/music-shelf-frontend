import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Header from '..';

describe('Header', () => {
  it('should render the header', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
