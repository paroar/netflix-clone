import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SelectProfileContainer from '../../containers/profile';

jest.mock('react-router-dom', () => ({
  Link: 'a',
  Route: ({ children, path }) => children({ match: path === '/' }),
}));

describe('<Profile />', () => {
  it('renders the <Profiles />', () => {
    const user = { displayName: 'Karl', photoURL: 'profile.png' };
    const setProfile = jest.fn();
    const { getByTestId } = render(
      <SelectProfileContainer user={user} setProfile={setProfile} />
    );

    fireEvent.click(getByTestId('user-profile'));
    expect(setProfile).toHaveBeenCalled();
  });
});
