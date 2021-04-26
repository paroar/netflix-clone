import React from 'react';
import {
  getAllByPlaceholderText,
  getByText,
  render,
} from '@testing-library/react';
import { Home } from '../../pages';

jest.mock('react-router-dom', () => ({
  Link: 'a',
  Route: ({ children, path }) => children({ match: path === '/' }),
}));

test('Homepage', () => {
  const { getByText, getAllByPlaceholderText } = render(<Home />);

  expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy();
  expect(getByText('Watch anywhere. Cancel at any time.')).toBeTruthy();
  expect(getByText('Try it Now')).toBeTruthy();
  expect(
    getByText(
      'Ready to watch? Enter your email to create or restart your membership'
    )
  ).toBeTruthy();
  expect(getAllByPlaceholderText('Email address')).toBeTruthy();
});
