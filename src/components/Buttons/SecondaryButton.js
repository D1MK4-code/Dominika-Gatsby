import styled from 'styled-components';

const SecondaryButton = styled.button`
background-color: #fff;
padding: .6rem .9rem;
color: #000;
font-size: .8rem;
font-weight: 400;
text-transform: uppercase;
letter-spacing: 0.05rem;
position: relative;
border: 2px solid #8cb3d2;
z-index: 1;
display: block;
box-shadow: 5px 5px #dfdfdf;
transition: box-shadow .3s ease, background-color .2s ease, color .2s ease;
&:hover {
  box-shadow: none ;
  background-color: #8cb3d2;
  color: #fff;
}
`;

export default SecondaryButton;
