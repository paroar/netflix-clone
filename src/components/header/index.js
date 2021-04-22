import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Background,
  Frame,
  Logo,
  ButtonLink,
  Feature,
  FeatureCallOut,
  Text,
  TextLink,
  Group,
  Picture,
  DropDown,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from './styles/header';

const Header = ({ bg = true, children, ...restProps }) =>
  bg ? <Background {...restProps}>{children}</Background> : children;

export default Header;

Header.Frame = ({ children, ...restProps }) => (
  <Frame {...restProps}>{children}</Frame>
);

Header.Group = ({ children, ...restProps }) => (
  <Group {...restProps}>{children}</Group>
);

Header.Logo = ({ to, ...restProps }) => (
  <Link to={to}>
    <Logo {...restProps} />
  </Link>
);

Header.ButtonLink = ({ children, ...restProps }) => (
  <ButtonLink {...restProps}>{children}</ButtonLink>
);

Header.Feature = ({ children, ...restProps }) => (
  <Feature {...restProps}>{children}</Feature>
);

Header.FeatureCallOut = ({ children, ...restProps }) => (
  <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
);

Header.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);

Header.TextLink = ({ children, ...restProps }) => (
  <TextLink {...restProps}>{children}</TextLink>
);

Header.Picture = ({ src, ...restProps }) => (
  <Picture {...restProps} src={`/images/users/${src}.png`} />
);

Header.DropDown = ({ children, ...restProps }) => (
  <DropDown {...restProps}>{children}</DropDown>
);

Header.Profile = ({ children, ...restProps }) => (
  <Profile {...restProps}>{children}</Profile>
);

Header.Search = ({ searchTerm, setSearchTerm, ...restProps }) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.PlayButton = ({ children, ...restProps }) => (
  <PlayButton {...restProps}>{children}</PlayButton>
);
