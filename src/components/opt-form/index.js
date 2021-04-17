import React from 'react';
import { Container, Input, Button, Text, Break } from './styles/opt-form';

const OptForm = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

export default OptForm;

OptForm.Input = ({ ...restProps }) => <Input {...restProps} />;

OptForm.Button = ({ children, ...restProps }) => (
  <Button {...restProps}>
    {children}
    <img src="/images/icons/chevron-right.png" alt="Try Now" />
  </Button>
);

OptForm.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);

OptForm.Break = ({ ...restProps }) => <Break {...restProps} />;
