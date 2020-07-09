import React from 'react';
import '../../SCSS/PrisBanner.scss';
export const PrisBanner = () => {
  return (
    <div id="pris-container">
      <h3 id="pris-title">Pris fra 199,- kr til 399,- kr</h3>
      <h4 className="pris-text">30 x minutter 199,- kr</h4>
      <h4 className="pris-text">45 x minutter 299,- kr</h4>
      <h4 className="pris-text">60 x minutter 399,- kr</h4>
    </div>
  );
};
