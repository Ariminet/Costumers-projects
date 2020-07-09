import React from 'react';

import '../../../SCSS/NavMassage.scss';
import { HashLink as NavLink } from 'react-router-hash-link';
export const Navigation = () => {
  return (
    <div id="massage-nav">
      <NavLink
        activeClassName="selected"
        activeStyle={{
          paddingTop: '1.2%',
        }}
        id="sports-tab"
        className="massage-link"
        to="/sports-massage#pris-container"
      >
        Sports Massage
      </NavLink>
      <NavLink
        activeStyle={{
          paddingTop: '1.2%',
          transition: 'ease-in-out 0.03s',
        }}
        id="wellness-tab"
        className="massage-link"
        to="/wellness-massage#pris-container"
      >
        Wellness Massage
      </NavLink>
    </div>
  );
};
