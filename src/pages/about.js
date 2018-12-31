import Img from 'gatsby-image';
import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Header, Layout, Wrapper } from 'components';
import { StyledLinks, theme } from '../../config/Theme';
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
  ${StyledLinks}
`;

const BikePhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

class About extends React.Component {
  render() {
    const data = this.props.data;
    const photos = [
      data.biking1.childImageSharp.fluid,
      data.biking2.childImageSharp.fluid,
      data.biking3.childImageSharp.fluid,
    ];
    return (
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
              With the help of a{' '}
              <a
                href="http://www.flask.com/the-art-of-the-disco-nap-sleeping-between-happy-hour-and-a-night-out/"
                target="_blank"
              >
                disco nap
              </a>
              , you can sometimes find me at one of many SF concert venues in search of beats that give me frisson.
            </p>
            <BikePhotos>
              {photos.map(photo => (
                <Img key={photo.originalName} fluid={photo} />
              ))}
            </BikePhotos>
            <br />
            <p>I am also known to wear clothing that matches my bike.</p>
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}

export default About;

export const query = graphql`
  query BikePhotoQuery {
    biking1: file(relativePath: { regex: "/bike_face_mask/" }) {
      childImageSharp {
        fluid(maxWidth: 200, toFormat: PNG) {
          sizes
          src
          srcSet
          aspectRatio
          originalName
        }
      }
    }
    biking2: file(relativePath: { regex: "/bike_rain_jacket/" }) {
      childImageSharp {
        fluid(maxWidth: 200, toFormat: PNG) {
          sizes
          src
          srcSet
          aspectRatio
          originalName
        }
      }
    }
    biking3: file(relativePath: { regex: "/bike_puffy_jacket/" }) {
      childImageSharp {
        fluid(maxWidth: 200, toFormat: PNG) {
          sizes
          src
          srcSet
          aspectRatio
          originalName
        }
      }
    }
  }
`;
