import React from 'react';
import CookieConsent from 'react-cookie-consent';
export const Cookieconsent = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Luk"
      acceptOnScroll={true}
      cookieName="myAwesomeCookieName2"
      style={{ background: '#2B373B', fontSize: '1.5rem' }}
      buttonStyle={{ color: '#4e503b', fontSize: '1.5rem' }}
      expires={150}
    >
      Vi bruger cookies på dette website til at forbedre din bruger oplevelse.{' '}
    </CookieConsent>
  );
};
