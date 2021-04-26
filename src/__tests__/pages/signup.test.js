import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Signup from '../../pages/signup';
import { FirebaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({
        user: {
          updateProfile: jest.fn(() => Promise.resolve('I am signed up!')),
        },
      })
    ),
  })),
};

describe('<SignUp />', () => {
  it('renders the sign up page with a form submission', () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <Signup />
        </FirebaseContext.Provider>
      </Router>
    );

    act(() => {
      fireEvent.change(getByPlaceholderText('First name'), {
        target: { value: 'Karl' },
      });
      fireEvent.change(getByPlaceholderText('Email address'), {
        target: { value: 'karl@gmail.com' },
      });
      fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'password' },
      });
      fireEvent.click(getByTestId('sign-up'));
    });

    expect(getByPlaceholderText('First name').value).toBe('Karl');
    expect(getByPlaceholderText('Email address').value).toBe('karl@gmail.com');
    expect(getByPlaceholderText('Password').value).toBe('password');
    expect(queryByTestId('error')).toBeFalsy();
  });
});
