import React from 'react';

import { Container, Title, List, Item, Picture, Name } from './styles/profiles';

const Profiles = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

export default Profiles;

Profiles.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Profiles.List = ({ children, ...restProps }) => (
  <List {...restProps}>{children}</List>
);

Profiles.Item = ({ children, ...restProps }) => (
  <Item {...restProps}>{children}</Item>
);

Profiles.Picture = ({ src, ...restProps }) => (
  <Picture
    {...restProps}
    src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
  />
);

Profiles.Name = ({ children, ...restProps }) => (
  <Name {...restProps}>{children}</Name>
);
