import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SongDataProvider } from '../../../contexts/SongData';
import SongsOfGenre from '..';

describe('SongsOfGenre', () => {
  it('should render the songs of genre', () => {
    const songsByGenre = {
      Country: [
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
      ],
    };
    const genreImages = {
      Country:
        'https://i.scdn.co/image/ab67706c0000bebbf2b5f2f4f4f4f4f4f4f4f4f4',
    };

    const { container } = render(
      <SongsOfGenre
        key={'Country'}
        genre={'Country'}
        songs={songsByGenre['Country']}
        genreImage={genreImages['Country']}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
