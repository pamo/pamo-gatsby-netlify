import styled from 'styled-components';

const colors = {
  primary: '#2ec8d0', // Color for buttons or links
  bg: 'white', // Background color
  grey: {
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.5)',
    ultraLight: 'rgba(0, 0, 0, 0.25)',
  },
};

const transitions = {
  normal: '0.5s',
};

const fontSize = {
  small: '0.9rem',
};

export const theme = {
  colors,
  transitions,
  fontSize,
};

export const StyledLinks = `
  a:not(.gatsby-resp-image-link), a:visited:not(.gatsby-resp-image-link){
    text-shadow: 0.03em 0 #fff, -0.03em 0 #fff, 0 0.03em #fff, 0 -0.03em #fff, 0.06em 0 #fff, -0.06em 0 #fff, 0.09em 0 #fff, -0.09em 0 #fff, 0.12em 0 #fff, -0.12em 0 #fff, 0.15em 0 #fff, -0.15em 0 #fff;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${theme.colors.primary} 1px, ${
  theme.colors.primary
} 2px, rgba(0, 0, 0, 0) 2px);
    color: ${theme.colors.primary};
    text-decoration: none;
  }
  a:hover:not(.gatsby-resp-image-link), a:active:not(.gatsby-resp-image-link) {
   color: ${theme.colors.primary};
   transition: all ${theme.transitions.normal};
   text-shadow: none;
   text-decoration: none;
   background-image: none;
  },
  `;
