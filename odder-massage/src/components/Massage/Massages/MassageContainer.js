import React from 'react';
import { SportsMassage } from './SportsMassage';
import { WellnessMassage } from './WellnessMassage';
import '../../../SCSS/Massage.scss';

export const MassageContainer = () => {
  return (
    <div id="massage-comp-container">
      <SportsMassage />
      <WellnessMassage />
    </div>
  );
};
