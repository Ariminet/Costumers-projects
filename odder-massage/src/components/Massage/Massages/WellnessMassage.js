import React from 'react';
import '../../../SCSS/WellnessMassage.scss';
import { HashLink as Link } from 'react-router-hash-link';
export const WellnessMassage = () => {
  return (
    <figure id="wellness-container" className="massage-container">
      <img
        className="massage-img"
        src="wellness-massage.jpg"
        alt="Kvinde får smurt olie på ryggen på en massage briks med tændt lys i baggrunden"
      />
      <div className="massage-text-container">
        <Link
          smooth
          to="/wellness-massage#pris-container"
          className="massage-title"
        >
          Wellness Massage
        </Link>
        <p className="massage-text">
          "Husker du at forkæle dig selv? Glemmer du dig selv i din travle
          hverdag, og trænger du virkelig til at give din krop noget velvære og
          få et dejligt afbræk i hverdagen? Så skal du vælge wellness massage,
          som virkelig er luksus for kroppen"
        </p>
      </div>
    </figure>
  );
};
