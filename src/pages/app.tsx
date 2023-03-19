import { Router } from '@reach/router';
import { FC } from 'react';
import Example from './example';
import About from './example/about';
import Welcome from './example/welcome';

interface Props {}

const App: FC<Props> = () => {
  return (
    <Router>
      <Welcome path='/' />
      <Example path='example/*' />
    </Router>
  );
};

export default App;