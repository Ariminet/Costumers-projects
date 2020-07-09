import React from 'react';
import '../../../SCSS/SportsMassage.scss';
import { HashLink as Link } from 'react-router-hash-link';

export const SportsMassage = () => {
  return (
    <figure id="sport-container" className="massage-container">
      <img
        className="massage-img"
        src="Massagelykke.jpg"
        alt="Mand får sports massage på briks iført et håndklæde"
      />
      <div className="massage-text-container">
        <Link
          smooth
          to="/sports-massage#pris-container"
          className="massage-title"
        >
          Sports Massage
        </Link>
        <p className="massage-text">
          "Du behøver ikke dyrke sport for at få sportsmassage, men har du brug
          for en effektiv massage, som fjerner dine myoser, løsner dine spændte
          muskler op og mindsker dine smerter? Så er sportsmassage et godt valg"
        </p>
      </div>
    </figure>
  );
};
