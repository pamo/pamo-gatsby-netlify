import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Header, Layout, Wrapper } from 'components';
import { media } from '../utils/media';

import config from '../../config/SiteConfig';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const BikePhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

const About = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`About | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Content>
        <h2>My Name is Pamela Ocampo</h2>
        <h3>I'm a software engineer living in San Francisco, CA.</h3>
        <p>
          When I'm not sitting in front of a screen programming, or rather, perfecting an artisanal{' '}
          <a href="https://www.vim.org/about.php" target="_blank">
            .vimrc
          </a>
          , I'm either wandering around town drinking coffee, riding my bike, climbing fake rocks, or lifting heavy
          things.
        </p>
        <p>
          With the help of a
          <a
            href="http://www.flask.com/the-art-of-the-disco-nap-sleeping-between-happy-hour-and-a-night-out/"
            target="_blank"
          >
            disco nap
          </a>
          , you can sometimes find me at one of many SF concert venues in search of beats that give me frisson.
        </p>
        <BikePhotos>
          <img src="images/bike_063018.png" />
          <img src="images/bike_092418.png" />
          <img src="images/bike_120418.png" />
        </BikePhotos>
        <p>I am also known to wear clothing that matches my bike.</p>
      </Content>
    </Wrapper>
  </Layout>
);

export default About;
