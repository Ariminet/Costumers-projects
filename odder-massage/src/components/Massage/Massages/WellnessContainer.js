import React from 'react';
import { Link } from 'react-router-dom';

export const WellnessContainer = () => {
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
    <figure className="massage-type-container">
      <div className="text-container">
        <h2 className="text-title">Hvad er Wellness Massage ?</h2>
        <p className="text-text">
          Min wellness massage er en blidere form for massage med fokus på, at
          det skal være en dejlig oplevelse. Lig og nyd afslappende musik imens
          du får en grundig, afslappende massage og giv dig selv lov til at få
          et break fra hverdagens stress.
        </p>
        <p className="text-text">
          Er du en af dem, der ikke er så meget for, at der bliver taget hårdt
          fat, eller bliver du øm af at blive behandlet? Så er wellness massage
          det rette valg for dig.
        </p>
        <p className="text-text">
          Du bliver masseret af kyndige hænder, og du kan trygt slappe af, imens
          din krop bliver plejet. Jeg tilpasser nøje styrke og hastighed til
          dig, så oplevelsen bliver så afslappende som muligt.
        </p>
        <p className="text-text">
          Jeg har hjulpet mange klienter, både elitesportsfolk, men også helt
          almindelige mennesker, der havde problemer pga. dårlige
          arbejdsstillinger, stress, kontorarbejde eller akut opstående skader.
        </p>
        <Link href="" className="sm_booking booking-btn">
          BOOK EN TID
        </Link>
      </div>
      <img src="wellness-massage.jpg" alt="" className="img-container" />
    </figure>
  );
};
