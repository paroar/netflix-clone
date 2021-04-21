import React from 'react';
import { HOME } from '../constants/routes';
import logo from '../logo.svg';
import { Header, Profiles } from '../components';

const SelectProfileContainer = ({ user, setProfile }) => (
  <>
    <Header bg={false}>
      <Header.Frame>
        <Header.Logo to={HOME} src={logo} />
      </Header.Frame>
    </Header>

    <Profiles>
      <Profiles.Title>Who's watching?</Profiles.Title>
      <Profiles.List>
        <Profiles.Item
          onClick={() =>
            setProfile({
              displayName: user.displayName,
              photoURL: user.photoURL,
            })
          }
        >
          <Profiles.Picture src={user.photoURL} />
          <Profiles.Name>{user.displayName}</Profiles.Name>
        </Profiles.Item>
      </Profiles.List>
    </Profiles>
  </>
);

export default SelectProfileContainer;
