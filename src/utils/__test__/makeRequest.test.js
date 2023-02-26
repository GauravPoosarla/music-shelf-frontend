import makeRequest from '../makeRequest';
import {
  GET_SONGS_DATA,
  GET_SONG_DATA,
  LIKE_SONG,
} from '../../constants/apiEndPoint';
import { BACKEND_URL } from '../../constants/apiEndPoint';
import axios from 'axios';

jest.mock('axios');

const mockSongsData = [
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
];

const mockSongs = describe('makeRequest', () => {
  it('should make api call only when api endpoint is provided', async () => {
    axios.mockResolvedValue({ data: mockSongsData });
    expect(axios).toHaveBeenCalledTimes(0);
    await makeRequest(GET_SONGS_DATA());
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: 'http://localhost:8080/api/records',
      method: 'GET',
    });
  });
});
