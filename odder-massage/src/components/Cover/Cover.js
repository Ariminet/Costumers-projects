import React from 'react';
import { Link } from 'react-router-dom';
import '../../SCSS/Cover.scss';
export const Cover = () => {
  var sm_App = '7f59d07a-5fd4-48c0-887a-b504f5d76c68';
  var sm_WidgetUrl = 'https://web-booking.dk/modules/booking/';
  (function () {
    var sm = document.createElement('script');
    sm.type = 'text/javascript';
    sm.async = true;
    sm.src = sm_WidgetUrl + 'js/booking.js?v=637248340262727713';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(sm, s);
  })();
  return (
    <figure id="cover-container">
      <div id="cover-text-container">
        <h2 id="cover-title">Odder Wellness & Sportsmassør</h2>
        <p className="cover-text">Specialist i genoptræning og ømme muskler</p>
        <p className="cover-text">Pris fra 199,- kr</p>
        <div id="link-container">
          <Link to="" className="cover-link sm_booking">
            BOOK EN TID
          </Link>
        </div>
      </div>
    </figure>
  );
};
