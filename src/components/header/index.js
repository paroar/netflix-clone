import React from 'react';
import { Link } from 'react-router-dom';
import { Background, Container, Logo, ButtonLink } from './styles/header';

const Header = ({ bg = true, children, ...restProps }) =>
  bg ? <Background {...restProps}>{children}</Background> : children;

export default Header;

Header.Container = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Header.Logo = ({ to, ...restProps }) => (
  <Link to={to}>
    <Logo {...restProps} />
  </Link>
);

Header.ButtonLink = ({ children, ...restProps }) => (
  <ButtonLink {...restProps}>{children}</ButtonLink>
);
