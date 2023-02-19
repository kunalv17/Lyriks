import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'Pop', value: 'Pop' },
  { title: 'Hip-Hop', value: 'Hip-Hop/Rap' },
  { title: 'Dance', value: 'Dance' },
  { title: 'Electronic', value: 'Electronic' },
  { title: 'Soul', value: 'R&B/Soul' },
  { title: 'Alternative', value: 'Alternative' },
  { title: 'Rock', value: 'Rock' },
  { title: 'Latin', value: 'Latin' },
  { title: 'Film', value: 'Film, TV & Stage' },
  { title: 'Country', value: 'Country' },
  { title: 'Worldwide', value: 'Worldwide' },
  { title: 'Reggae', value: 'Reggae/Dancehall' },
  { title: 'House', value: 'House' },
  { title: 'K-Pop', value: 'K-Pop' },
];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];
