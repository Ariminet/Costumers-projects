import React, { Fragment } from 'react';
import '../../SCSS/Ydelser.scss';
import { PrisBanner } from '../Priser/PrisBanner';
import { YdelseLinks } from './YdelseLinks';
import { Gratisbanner } from '../Priser/Gratisbanner';
import { YdelseCover } from './YdelseCover';
export const Ydelser = () => {
  return (
    <Fragment>
      <YdelseCover />
      <PrisBanner />
      <YdelseLinks />
      <Gratisbanner />
    </Fragment>
  );
};
