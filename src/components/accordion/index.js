import React, { createContext, useState, useContext } from 'react';
import {
  Container,
  Inner,
  Title,
  Item,
  Header,
  Body,
} from './styles/accordion';

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => (
  <Container {...restProps}>
    <Inner>{children}</Inner>
  </Container>
);

export default Accordion;

Accordion.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Accordion.Item = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = ({ children, ...restProps }) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = ({ children, ...restProps }) => {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
