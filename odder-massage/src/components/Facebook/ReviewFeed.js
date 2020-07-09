import React from 'react';
import '../../SCSS/Review.scss';
export const ReviewFeed = () => {
  return (
    <div id="review-container">
      <div className="review" id="review-1">
        <a
          className="review-link"
          href="https://www.facebook.com/pg/Oddermassagevedchristianlykke/reviews/?ref=page_internal"
        >
          <div className="head-container">
            <img
              className="head-img"
              src="https://scontent.faar1-1.fna.fbcdn.net/v/t1.0-9/90269914_2884576878246978_4956627688216330240_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=DBzHpdBEDisAX9hnlox&_nc_ht=scontent.faar1-1.fna&oh=e998f30dca7ff58d0f87aec3646470c2&oe=5EDEC81B"
              alt=""
            />
            <h4 className="name">Nadia Sletskov Ruberg Jensen</h4>
          </div>
          <div className="foot-container">
            <div className="star-container">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p className="review-text">
              Christian er super dygtigt, lydhør. Og skulle du gøre noget godt
              for dig selv eller en du har kær, så en Wellness massage også en
              mulighed. Så sving forbi Christian 🙂
            </p>
          </div>
        </a>
      </div>
      <div className="review" id="review-2">
        <a
          className="review-link"
          href="https://www.facebook.com/pg/Oddermassagevedchristianlykke/reviews/?ref=page_internal"
        >
          <div className="head-container">
            <img
              className="head-img"
              src="https://scontent.faar1-1.fna.fbcdn.net/v/t1.0-9/81205190_10221664860791076_684945785044860928_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=odA5mnfTYI4AX8RooFh&_nc_ht=scontent.faar1-1.fna&oh=214afd5cd0538784675fc1001d813381&oe=5EDEFFF8"
              alt=""
            />
            <h4 className="name">Christina Schmidt Villumsen</h4>
          </div>
          <div className="foot-container">
            <div className="star-container">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p className="review-text">
              Christian er en dygtig og lydhør massør. Han er god til at finde
              de rigtige punkter hvor man er spændt. Tager meget hensyn til hvor
              meget man kan klare for at få "løsnet" op i de spændte muskler. De
              bedste og varmeste anbefalinger er hermed givet videre.
            </p>
          </div>
        </a>
      </div>
      <div className="review" id="review-3">
        <a
          className="review-link"
          href="https://www.facebook.com/pg/Oddermassagevedchristianlykke/reviews/?ref=page_internal"
        >
          <div className="head-container">
            <img
              className="head-img"
              src="https://scontent.faar1-1.fna.fbcdn.net/v/t1.0-9/s960x960/94688219_10221003218246804_4387058000485941248_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=yRXDpua-pWIAX9wLa6v&_nc_ht=scontent.faar1-1.fna&_nc_tp=7&oh=de4475bdcfd1f70350c053b0dba5bef7&oe=5EDDC87C"
              alt=""
            />
            <h4 className="name">Eva Anita Kjær </h4>
          </div>
          <div className="foot-container">
            <div className="star-container">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p className="review-text">
              Har nu været hos Christian nogle gange og fået massage og det kan
              kun anbefales! Spændinger og fastlåste muskler kommer han i dybden
              med. Og han lytter til, hvad jeg har brug for 👌 Dygtig massør,
              god behandling og god service = meget tilfreds kunde 😊
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
