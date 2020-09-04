import React from "react";
import "../SCSS/ChristianInfo.scss";
import { PrisBanner } from "./Priser/PrisBanner";
export const ChristianInfo = () => {
  return (
    <div id="christian-container">
      <div id="christian-text">
        <h3 className="odder-title">Hej, mit navn er Christian Lykke</h3>
        <p className="odder-text">
          Jeg har de sidste par år arbejdet med at hjælpe mennesker med at få en
          bedre hverdag på den ene eller den anden måde. Det har altid givet en
          fantastisk fornemmelse i kroppen og gjort mig glad, når jeg har kunnet
          hjælpe andre.
        </p>
        <h4 className="odder-under-title">Min Passion for at hjælpe andre</h4>
        <p className="odder-text">
          Jeg uddannede mig som personlig træner og massør i 2017, fordi jeg
          spillede på landsholdet i rugby, og jeg ville gerne optimere min viden
          og min egen træning. Jeg opdagede hurtigt min store passion for at
          hjælpe andre mennesker. Derfor valgte jeg at videreuddanne mig som
          kostvejleder i 2018, og nu er mit næste projekt at starte akupunktur
          og cupping uddannelsen til september. Jeg er vild med at videreudvikle
          mig selv, så jeg kan hjælpe endnu flere mennesker.
        </p>
        <h4 className="odder-under-title">Min erfaring</h4>
        <p className="odder-text">
          Jeg har hjulpet mange forskellige slags mennesker de sidste par år.
          Både som personlig træner, coach og kostvejleder i Fitness World
          Odder, men også i mit tidligere job som massør for FysioDanmark. Jeg
          arbejdede både på klinikken, men også ude ved firmaer som Bestseller i
          Stilling, Hybel i Horsens og Herreholdet i Odder IGF Fodbold.
        </p>
        <p className="odder-text">
          Jeg har hjulpet mange klienter. Det gælder både elitesportsfolk, men
          også helt almindelige mennesker, der havde problemer pga. dårlige
          arbejdsstillinger, stress, kontorarbejde eller akut opstående skader.
        </p>
      </div>
      <figure id="christian-info">
        <img
          src="christian.jpg"
          alt="Billede af christian lykke som er massør ved Odder Massage"
          id="christian-img"
        />
      </figure>
      <PrisBanner />
    </div>
  );
};
