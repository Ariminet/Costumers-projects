import React from "react";
import "../../SCSS/Home.scss";
import { Cover } from "../Cover/Cover";
import { ChooseMe } from "../ChooseMe";
import { PrisBanner } from "../Priser/PrisBanner";
import { MassageContainer } from "../Massage/Massages/MassageContainer";
import { ChristianInfo } from "../ChristianInfo";
import { ReviewFeed } from "../Facebook/ReviewFeed";

export const Home = () => {
  return (
    <div id="content-wrapper">
      <Cover />
      <ChooseMe />
      <MassageContainer />
      <ChristianInfo />
      <ReviewFeed />
    </div>
  );
};
