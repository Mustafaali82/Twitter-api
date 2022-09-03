import React from "react";
import Tweet from "../Tweets/Tweet";
import User from "../User/User";
import State from "../UserState/State";
import classes from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className={classes.main}>
      <User />
      <Tweet />
      <State />
    </div>
  );
};

export default HeroSection;
