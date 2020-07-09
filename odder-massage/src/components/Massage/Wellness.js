import React, { Fragment } from 'react';
import '../../SCSS/Ydelser.scss';
import '../../SCSS/Wellness.scss';
import { YdelseCover } from './YdelseCover';
import { PrisBanner } from '../Priser/PrisBanner';
import { Gratisbanner } from '../Priser/Gratisbanner';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Navigation } from './massageNav/Navigation';
import { WellnessContainer } from './Massages/WellnessContainer';
import { SportsContainer } from './Massages/SportsContainer';

export const Wellness = () => {
  return (
    <HashRouter>
      <Fragment>
        <YdelseCover />
        <PrisBanner />
        <Navigation />
        <Switch>
          <Route path="/sports-massage" exact component={SportsContainer} />
          <Route path="/wellness-massage" exact component={WellnessContainer} />
        </Switch>
        <Gratisbanner />
      </Fragment>
    </HashRouter>
  );
};
