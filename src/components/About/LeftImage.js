import React from 'react';
import { graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import Image from 'gatsby-image';


const LeftImage = styled(Image)`
width: 40rem;
height: 28rem;
padding-left: 3.75rem;
`;

export const queryy = graphql`
  query {
    file(name: { eq: "img-3" }) {
      childImageSharp {
        fixed(width: 1920, height: 1080, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

export default LeftImage;