import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Card from '..';
import makeRequest from '../../../utils/makeRequest';

jest.mock('../../../utils/makeRequest');

describe('Card', () => {
  const mockSong = {
    id: 'cd3cc1e3-e1e0-4ccd-bc67-747648985838',
    name: 'Lost',
    imageUrl:
      'https://i.scdn.co/image/ab67616d0000b27386a8ab515de4b7aef28cd631',
    artist: {
      id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
      name: 'Maroon 5',
    },
    genre: {
      id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
      name: 'Pop',
    },
  };

  it('should render the card', () => {
    makeRequest.mockResolvedValue({
      data: {
        count: 15,
        like: true,
      },
    });
    render(<Card song={mockSong} />);
    expect(screen.queryByText('Lost')).toBeTruthy();
    waitFor(() => {
      expect(screen.queryByText('15')).toBeTruthy();
    });
  });

  it('should render the card with like false', () => {
    makeRequest.mockResolvedValueOnce({
      data: {
        count: 15,
        like: false,
      },
    });
    makeRequest.mockResolvedValueOnce({
      data: {
        count: 16,
        like: true,
      },
    });
    const { container } = render(<Card song={mockSong} />);
    waitFor(() => {
      expect(screen.queryByText('15')).toBeTruthy();
    });

    const likeButton = container.querySelector('.like');
    fireEvent.click(likeButton);

    waitFor(() => {
      expect(screen.queryByText('16')).toBeTruthy();
    });
  });

  it('should toggle the like image when clicked', () => {
    makeRequest.mockResolvedValueOnce({
      data: {
        count: 15,
        like: false,
      },
    });
    makeRequest.mockResolvedValueOnce({
      data: {
        count: 16,
        like: true,
      },
    });

    const { container } = render(<Card song={mockSong} />);
    const likeButton = container.querySelector('.like');

    waitFor(() => {
      expect(likeButton.src).toContain('like-gray.svg');
    });

    fireEvent.click(likeButton);

    waitFor(() => {
      expect(likeButton.src).toContain('like-red.svg');
    });

    fireEvent.click(likeButton);

    waitFor(() => {
      expect(likeButton.src).toContain('like-gray.svg');
    });
  });

  it('should render correctly', () => {
    makeRequest.mockResolvedValue({
      data: {
        count: 15,
        like: true,
      },
    });
    const { container } = render(<Card song={mockSong} />);
    expect(container).toMatchSnapshot();
  });
});
