import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Timeline from '../pages/Timeline';

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Timeline} />
      </Switch>
    </>
  );
};

export default Routes;
