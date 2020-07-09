import React from 'react';
import '../SCSS/ChooseMe.scss';
export const ChooseMe = () => {
  return (
    <div id="choose-container">
      <h3 id="choose-title">Hvorfor vælge Odder Massage</h3>
      <ul id="choose-list">
        <li className="choose-points">
          Massagen er altid skræddersyet til dig
          <span className="choose-text">
            Jeg starter alle massager med en grundig gennemgang af dine ønsker
            og eventuelle problemer, så vi sammen kan tilrettelægge en
            skræddersyet massage til lige netop dig og din krop.
          </span>
        </li>

        <li className="choose-points">
          Massage er for alle
          <span className="choose-text">
            Jeg har hjulpet mange klienter både elitesportsfolk, men også helt
            almindelige mennesker, der havde problemer pga. dårlige
            arbejdsstillinger, stress, kontorarbejde eller akut opstående
            skader.
          </span>
        </li>
        <li className="choose-points">
          Professionel service
          <span className="choose-text">
            Har du smerter, vil jeg altid anbefale dig at søge læge for at finde
            ud af, hvad det er? Medmindre du 100% ved, hvad smerten er.
          </span>
          <span className="choose-text">
            Jeg vurderer altid, om det er noget, som jeg kan hjælpe med eller
            ej. Du er altid velkommen til at kontakte mig først for at høre, om
            jeg kan hjælpe med netop dine symptomer og problematikker. Nedenfor
            er en liste over nogle af de problematikker, som jeg ofte kan
            afhjælpe med massage
          </span>
        </li>
        <li className="choose-points">
          Ekstra service
          <span className="choose-text">
            Jeg tager mig altid tid efter behandling til at rådgive dig i, hvad
            jeg vil anbefale dig at gøre, inden vi ses igen, selvfølgelig efter
            den enkeltes behov og ønsker.
          </span>
        </li>
        <li className="choose-points">
          <li className="list">Hovedpine</li>
          <li className="list">Nakkesmerter</li>
          <li className="list">Hold i nakken</li>
          <li className="list">Skuldersmerter</li>
          <li className="list">Frossen skulder</li>
          <li className="list">Musearm</li>
          <li className="list">Sovende fingre</li>
          <li className="list">Tennisalbue</li>
          <li className="list">Golfalbue</li>
          <li className="list">Smerter bag skulderblade</li>
          <li className="list">Rygsmerter</li>
          <li className="list">Ondt i lænden</li>
          <li className="list">Iskiassmerter </li>
          <li className="list">Strålende smerter i ballen og ned i benet</li>
          <li className="list">Smerter i benet</li>
          <li className="list">Ben der sover</li>
          <li className="list">Lyskesmerter</li>
          <li className="list">Fibersprængning</li>
          <li className="list">Løberknæ</li>
          <li className="list">Springerknæ</li>
          <li className="list">Skinnebensbetændelse</li>
          <li className="list">Ømme lægge</li>
          <li className="list">Kramper</li>
          <li className="list">senebetændelse ved baglårsfæstet</li>
          <li className="list">Muskelskader i baglår og hasemuskulatur</li>
          <li className="list">akillesenebetændelse</li>
        </li>
      </ul>
    </div>
  );
};
