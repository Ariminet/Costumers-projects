import React from 'react';
import '../../SCSS/YdelseLinks.scss';
import { HashLink as Link } from 'react-router-hash-link';
export const YdelseLinks = () => {
  return (
    <div id="ydelse-menu">
      {/* <MassageContainer /> */}
      <div className="massage-container">
        <Link smooth to="/sports-massage#pris-container" className="link-title">
          Sports Massage
          <p className="link-quote">
            "Du behøver ikke dyrke sport for at få sportsmassage, men har du
            brug for en effektiv massage, som fjerner dine myoser, løsner dine
            spændte muskler op og mindsker dine smerter? Så er sportsmassage et
            godt valg"
          </p>
        </Link>
      </div>
      <div className="massage-container">
        <Link
          smooth
          to="/wellness-massage#pris-container"
          className="link-title"
        >
          Wellness Massage
          <p className="link-quote">
            "Husker du at forkæle dig selv? Glemmer du dig selv i din travle
            hverdag, og trænger du virkelig til at give din krop noget velvære
            og få et dejligt afbræk i hverdagen? Så skal du vælge wellness
            massage, som virkelig er luksus for kroppen"
          </p>
        </Link>
      </div>
    </div>
  );
};
