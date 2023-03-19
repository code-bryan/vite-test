import { RouteComponentProps } from '@reach/router';
import { FC } from 'react';

interface Props extends RouteComponentProps {}

const Welcome: FC<Props> = () => {
  return (
    <>
      <h1>Hi</h1>
    </>
  );
};

export default Welcome;