import React from 'react';
import { Container, Title, SubTitle } from './styles/feature';

const Feature = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

export default Feature;

Feature.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Feature.SubTitle = ({ children, ...restProps }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
);
