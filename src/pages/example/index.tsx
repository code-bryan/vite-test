import { RouteComponentProps, Router } from '@reach/router';
import React, { FC } from 'react';
import About from './about';
import Welcome from './welcome';

interface IProps extends RouteComponentProps {}

const Example: FC<IProps> = () => {
  return (
    <Router >
      <Welcome path='/' />
      <About path='about' />
    </Router>
  );
};

export default Example;