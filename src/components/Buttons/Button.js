import styled, { createGlobalStyle } from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  padding: .6rem .9rem;
  color: ${({ isBlack }) => isBlack ? '#000' : '#fff'};
  font-size: .8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  position: relative;
  border: none;
  z-index: 1;
  &:after {
    content:'';
    position: absolute;
    width: 4.2rem;
    height: 2.2rem;
    background-color: #8cb3d2;
    left: -.3rem;
    top: .3rem;
    z-index: -1;
    transition: left .2s ease, top .2s ease;
  }
  &:before {
    content:'';
    position: absolute;
    width: 4.2rem;
    height: 2.2rem;
    border: 1px solid #fff;
    left: 0;
    top: 0;
    transition: left .2s ease, top .2s ease;
  }
&:hover {
  &:after {
    left: 0;
    top: 0;
  }
  &:before {
    left: -.3rem;
    top: .3rem;
  }
}

`;

export default Button;