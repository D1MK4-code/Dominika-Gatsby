import React from 'react';
import { graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import Image from 'gatsby-image';
import Button from '../components/Buttons/Button';
import SecondaryButton from '../components/Buttons/SecondaryButton';
import AboutWrapper from '../components/About/AboutWrapper';
import LeftImage from '../components/About/LeftImage';



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

const LeftWrapper = styled.div`
width: 40rem;
height: 28rem;
padding-left: 3.75rem;
`;


const RightWrapper = styled.div`
width: 100%;
text-align: left;
padding: 2rem;
`;

const RightHeading = styled.h2`
text-align: left;
font-size: 2rem;
color: #000;
`;

const RightSpan = styled.span`
text-align: left;
font-size: 2rem;
color: #8cb3d2;
`;

const RightText = styled.span`
text-align: left;
font-size: 1.1rem;
line-height: 1.5em;
color: #000;
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
    <AboutWrapper>
      <LeftWrapper>
        <LeftImage fixed={data.file.childImageSharp.fixed} />
      </LeftWrapper>
      <RightWrapper>
        <RightHeading>O<RightSpan> MNIE</RightSpan></RightHeading>
        <RightText>Nazywam się Dominika Napora, zajmuję się korektą i redakcją. Opowiem Ci, skąd taki pomysł. Od najmłodszych lat pasjonują mnie słowa. Pojedyncze litery, które tworzą wyrazy, następnie układane z nich zdania. Krótkie historie, długie opowieści. Wszystko, co składa się na tekst – od akapitu, po kropkę. Z tej miłości do słów było kółko poetyckie, gazeta szkolna i dorosłość, która pokrzyżowała mi plany.

Jest takie powiedzenie: Co się odwlecze… to się dowlecze :) I stało się, po wyboistej (czasami), ale właściwej ścieżce zostałam korektorem. Nie napiszę Ci, że znam cały słownik ortograficzny na pamięć, ale sprawię, że Twoje teksty staną się przejrzyste i łatwe w odbiorze. </RightText>
        <SecondaryButton>Czytaj więcej</SecondaryButton>
      </RightWrapper>
    </AboutWrapper>
  </>
);

export const query = graphql`
  query {
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
