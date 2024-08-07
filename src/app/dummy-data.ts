import { MusicInfo } from './control-panel/music-info.model';
import { Playlist } from './playlist.model';

export const musicData: MusicInfo[] = [
  {
    id: '0',
    name: 'Knee Socks',
    author: 'Arctic Monkeys',
    album: 'AM',
    path: './examples/Arctic Monkeys/Arctic Monkeys - Knee Socks.mp3',
  },
  {
    id: '1',
    name: 'Too Sweet',
    author: 'Hozier',
    album: 'Unheard',
    path: './examples/Hozier/Hozier - Too Sweet.mp3',
  },
  {
    id: '2',
    name: 'Roots',
    author: 'Imagine Dragons',
    album: 'Roots',
    path: './examples/Imagine Dragons/Imagine Dragons - Roots.mp3',
  },
  {
    id: '3',
    name: 'Higher Ground',
    author: 'Imagine Dragons',
    album: 'Mercury',
    path: './examples/Imagine Dragons/Imagine Dragons - Higher Ground.mp3',
  },
  {
    id: '4',
    name: 'Do I Wanna Know',
    author: 'Arctic Monkeys',
    album: 'AM',
    path: './examples/Arctic Monkeys/Arctic Monkeys - Do I Wanna Know.mp3',
  },
  {
    id: '5',
    name: 'Take Me To Church',
    author: 'Hozier',
    album: 'Hozier',
    path: './examples/Hozier/Hozier - Take Me To Church.mp3',
  },
];

export const playlists: Playlist[] = [
  {
    id: '0',
    name: 'Rock',
    logo: './examples/playlists/Rock.png',
    author: 'eltso_',
    description: 'Rock Music Playlist',
    songs: ['0', '1', '2'],
  },
  {
    id: '1',
    name: 'Pop',
    logo: './examples/playlists/Pop.png',
    author: 'eltso_',
    description: 'Pop Music Playlist',
    songs: ['0', '1', '2'],
  },
  {
    id: '2',
    name: 'Indie',
    logo: './examples/playlists/Indie.png',
    author: 'eltso_',
    description: 'Indie Music Playlist',
    songs: ['0', '1', '2'],
  },
  {
    id: '3',
    name: 'Acoustic',
    logo: './examples/playlists/Acoustic.png',
    author: 'eltso_',
    description: 'Acoustic Music Playlist',
    songs: ['0', '1', '2'],
  },
];
