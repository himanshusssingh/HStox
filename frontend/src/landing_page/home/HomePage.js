import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
const isLogin = localStorage.getItem("isLogin") === "true";

function HomaPage() {
  return (
    <>
      <Hero></Hero>
      <Awards></Awards>
      <Stats></Stats>
      <Pricing></Pricing>
      <Education></Education>
      {!isLogin && <OpenAccount></OpenAccount>}
    </>
  );
}

export default HomaPage;
