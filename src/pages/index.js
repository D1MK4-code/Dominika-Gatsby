import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import Button from '../components/Button/Button';

const ContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  padding-left: 3.8rem;
  h1 {
    font-size: 3.8rem;
    line-height: 1em;
  }

  p {
    font-size: 1.9rem;
    line-height: 1.2em;
    margin-top: .5rem;
  }
`;

const Span = styled.span`
color: #8cb3d2

`;

const ImageWrapper = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: top center;
  z-index: -1;
  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.6;
    z-index: 1;
  }
`;

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      {console.log(data)}
      <h1>Cześć,<br />
      mam na imię<br />
        <Span>Dominika</Span> </h1>
      <p>
        i zadbam<br />
        o Twoje słowa
      </p>
    </ContentWrapper>
    <ImageWrapper fluid={data.file.childImageSharp.fluid} />
  </>
);

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
