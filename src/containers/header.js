import React from 'react';
import { Header } from '../components';
import { HOME, SIGN_IN } from '../constants/routes';
import logo from '../logo.svg';

const HeaderContainer = ({ children }) => (
  <Header>
    <Header.Frame>
      <Header.Logo to={HOME} src={logo} alt="Netflix" />
      <Header.ButtonLink to={SIGN_IN}>Sign In</Header.ButtonLink>
    </Header.Frame>
    {children}
  </Header>
);

export default HeaderContainer;
