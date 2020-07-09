import React, { Fragment } from 'react';
import '../../SCSS/Ydelser.scss';
import '../../SCSS/Sport.scss';
import { YdelseCover } from './YdelseCover';
import { PrisBanner } from '../Priser/PrisBanner';
import { Gratisbanner } from '../Priser/Gratisbanner';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Navigation } from './massageNav/Navigation';
import { SportsContainer } from './Massages/SportsContainer';
import { WellnessContainer } from './Massages/WellnessContainer';

export const Sport = () => {
  return (
    <HashRouter>
      <Fragment>
        <YdelseCover />
        <PrisBanner />
        <Navigation />
        <Switch>
          <Route exact path="/sports-massage" component={SportsContainer} />
          <Route exact path="/wellness-massage" component={WellnessContainer} />
        </Switch>
        <Gratisbanner />
      </Fragment>
    </HashRouter>
  );
};
