import React from 'react';
import '../../SCSS/Freebanner.scss';
export const Gratisbanner = () => {
  return (
    <div id="free-banner">
      <h3 className="free-title">Gratis Behandling</h3>
      <h4 className="free-under-title">
        Henviser du 3 personer som hver især får minimum en times behandling
      </h4>
      <p className="free-text">
        Vil du blive kontaktet via mail om din gratis behandling. De personer du
        henviser skal huske at oplyse dit mobil nummer og navn ved booking. Dem
        du henviser for hver især 10% rabat på deres behandling.
      </p>
    </div>
  );
};
