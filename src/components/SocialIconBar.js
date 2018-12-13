import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import {
  FaFacebook as Facebook,
  FaFoursquare as Foursquare,
  FaGithub as Github,
  FaInstagram as Instagram,
  FaLastfmSquare as Lastfm,
  FaGetPocket as Pocket,
  FaSpotify as Spotify,
  FaTwitter as Twitter,
} from 'react-icons/fa';

import theme from '../../config/Theme';

const Icons = styled.div`
  grid-column: 2;
  a {
    margin-right: 0.25em;
    font-size: 1.8em;
    color: ${theme.colors.primary};
  }
  a:hover {
    color: ${theme.colors.grey.dark};
  }
`;
const networks = {
  facebook: {
    url: 'http://facebook.com/pamocampo',
    icon: Facebook,
  },
  twitter: {
    url: 'http://twitter.com/pmocampo',
    icon: Twitter,
  },
  github: {
    url: 'http://github.com/pamo',
    icon: Github,
  },
  instagram: {
    url: 'http://instagram.com/pmocampo',
    icon: Instagram,
  },
  foursquare: {
    url: 'http://foursquare.com/pmocampo',
    icon: Foursquare,
  },
  pocket: {
    url: 'http://getpocket.com/@pmocampo',
    icon: Pocket,
  },
  lastfm: {
    url: 'http://last.fm/user/Psyc-adelick',
    icon: Lastfm,
  },
  spotify: {
    url: 'https://play.spotify.com/user/pmocampo',
    icon: Spotify,
  },
};

const SocialIconBar = () => {
  const links = map(networks, (network, k) => {
    const iconTitle = `Pam on ${k}`;
    return (
      <a key={k} href={network.url} rel="noopener noreferrer" target="_blank" title={iconTitle}>
        <network.icon />
      </a>
    );
  });
  return <Icons>{links}</Icons>;
};

export default SocialIconBar;
