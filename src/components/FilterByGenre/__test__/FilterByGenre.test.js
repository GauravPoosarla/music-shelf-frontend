import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import FilterByGenre from '..';
import { SongDataProvider } from '../../../contexts/SongData';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('FilterByGenre', () => {
  const mockSongs = {
    data: [
      {
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
      },
      {
        id: '94af94a3-9d47-4dd8-9b45-1c51a9443e96',
        name: 'Maps',
        imageUrl:
          'https://i.scdn.co/image/ab67616d0000b273442b53773d50e1b5369bb16c',
        artist: {
          id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
          name: 'Maroon 5',
        },
        genre: {
          id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
          name: 'Pop',
        },
      },
      {
        id: '8266dac3-b2b1-4551-b2ec-91e260244a51',
        name: 'Payphone',
        imageUrl:
          'https://i.scdn.co/image/ab67616d0000b2733119f490f02fcee6514e8604',
        artist: {
          id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
          name: 'Maroon 5',
        },
        genre: {
          id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
          name: 'Pop',
        },
      },
      {
        id: '45e1d753-2986-43cb-9b9d-30c370056319',
        name: 'This Love',
        imageUrl:
          'https://i.scdn.co/image/ab67616d0000b27317b3850d758fff5a2301e537',
        artist: {
          id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
          name: 'Maroon 5',
        },
        genre: {
          id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
          name: 'Pop',
        },
      },
      {
        id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
        name: 'Beautiful Mistakes (feat. Megan Thee Stallion)',
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
      },
      {
        id: 'f5ba1936-bebb-4375-8007-79e3b3d45d7b',
        name: 'Raging Fire',
        imageUrl:
          'https://i.scdn.co/image/ab67616d0000b27304a86148a05884187f6e3151',
        artist: {
          id: '8150acae-62fd-491e-bac4-06d074b3c7b4',
          name: 'Phillip Phillips',
        },
        genre: {
          id: '305202d2-b598-4c1b-a2bb-ca08bb65bad3',
          name: 'Country',
        },
      },
      {
        id: 'f12c86c0-df24-47cd-af02-ff0f6700d45a',
        name: 'So Easy',
        imageUrl:
          'https://i.scdn.co/image/ab67616d0000b273bb7dac0075160938dd6c8799',
        artist: {
          id: '8150acae-62fd-491e-bac4-06d074b3c7b4',
          name: 'Phillip Phillips',
        },
        genre: {
          id: '305202d2-b598-4c1b-a2bb-ca08bb65bad3',
          name: 'Country',
        },
      },
    ],
  };

  it("should navigate to '/songs' when the button is clicked", () => {
    render(
      <SongDataProvider value={{ songs: mockSongs, setSongs: jest.fn() }}>
        <FilterByGenre />
      </SongDataProvider>
    );

    fireEvent.click(screen.getByAltText('icon-grid'));
    expect(mockNavigate).toHaveBeenCalledWith('/songs');
  });

  it('should render correctly', () => {
    const { container } = render(
      <SongDataProvider value={{ songs: mockSongs, setSongs: jest.fn() }}>
        <FilterByGenre />
      </SongDataProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
