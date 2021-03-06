import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Link } from 'gatsby';
import Button from '../Buttons/Button';

const NavigationWrapper = styled.nav`
  position: absolute;
  top: 1.25rem;
left: 0;
padding: 0 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Roboto';
  color: #fff;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const NavigationLogoWrapper = styled.div`

`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 1.25rem;
  margin-right: .6rem;
`;

const Span = styled.span`
font-size: 1.1rem;
display: block;
color: #8cb3d2;
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 1rem;
  margin-left: 2rem;
`;

const Navigation = () => (
  <NavigationWrapper>
    <NavigationLogoWrapper>
      <Logo><Link to="/">Dominika Napora<Span>Korekta i redakcja</Span></Link></Logo>
    </NavigationLogoWrapper>
    <NavigationList>
      <NavigationListItem>
        <Button ><Link to="/blog">Blog</Link></Button>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
);

export default Navigation;