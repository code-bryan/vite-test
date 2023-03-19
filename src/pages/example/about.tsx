import { RouteComponentProps } from '@reach/router';
import { FC } from 'react';

interface Props extends RouteComponentProps {}

const About: FC<Props> = () => {
  return (
    <>
      <h1>About</h1>
    </>
  );
};

export default About;