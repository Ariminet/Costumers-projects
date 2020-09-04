import React, { Fragment } from 'react';
import { Home } from './components/pages/Home';
import './SCSS/App.scss';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Navigation } from './components/navigation/Nav';
import { Wellness } from './components/Massage/Wellness';
import { Sport } from './components/Massage/Sport';
import { CookiePrivatliv } from './components/pages/CookiePrivatliv';
import { Footer } from './components/Footer/Footer';
import { FreeTreatment } from './components/pages/FreeTreatment';
import { Cookieconsent } from './components/CookieConsent/CookieConsent';
import { Ydelser } from './components/Massage/Ydelser';
import { NotFound } from './components/pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import { Vaction } from './components/Vacation/Vacation';
function App() {
  return (
    <HashRouter>
      <Fragment>
        <ScrollToTop />
        <Navigation />
        <Cookieconsent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/wellness-massage" component={Wellness} />
          <Route path="/sports-massage" component={Sport} />
          <Route exact path="/cookie-privatliv" component={CookiePrivatliv} />
          <Route exact path="/free-treatment" component={FreeTreatment} />
          <Route exact path="/ydelser" component={Ydelser} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>

        <Footer />
      </Fragment>
    </HashRouter>
  );
}

export default App;
