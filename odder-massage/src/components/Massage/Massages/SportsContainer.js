import React from 'react';
import '../../../SCSS/Massage-type-Container.scss';
import { Link } from 'react-router-dom';
export const SportsContainer = () => {
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
        <h2 className="text-title">Hvad er Sports Massage ?</h2>
        <p className="text-text">
          Jeg kombinerer min sportsmassage med mange effektive teknikker fra den
          klassisk fysiurgisk massage og triggerpunkt massage. Du vil opleve, at
          denne form for massage vil løsne godt op og være yderst effektiv.
        </p>
        <p className="text-text">
          Er du en af dem, som virkelig døjer med hovedpine, rygproblemer mm.?
          Så er sportsmassage det rette valg for dig.
        </p>
        <p className="text-text">
          Du bliver masseret af kyndige hænder, hvor jeg nøje tilpasser styrke
          og hastighed til dig, så oplevelsen bliver den bedste for dig.
          Massagen skal ikke gøre ondt for at gøre godt, så hvis du ikke kan
          slappe af under behandlingen, får massagen ikke den virkning, som den
          skal have.
        </p>
        <p className="text-text">
          Jeg har hjulpet mange klienter, både elitesportsfolk, men også helt
          almindelige mennesker, der havde problemer pga. dårlige
          arbejdsstillinger, stress, kontorarbejde eller akut opstående skader.
        </p>
        <Link href="" className="booking-btn sm_booking">
          BOOK EN TID
        </Link>
      </div>
      <img src="Massagelykke.jpg" alt="" className="img-container" />
    </figure>
  );
};
