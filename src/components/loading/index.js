import React from 'react';
import { Spinner, LockBody, ReleaseBody, Picture } from './styles/loading';

const Loading = ({ src, ...restProps }) => (
  <Spinner {...restProps}>
    <LockBody />
    <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
  </Spinner>
);

export default Loading;

Loading.ReleaseBody = () => <ReleaseBody />;
