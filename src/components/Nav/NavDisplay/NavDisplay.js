import React from "react";
import { Route, Switch } from "react-router-dom";
// components/styles
import Home from "./TabHome";
import Community from "./TabCommunity";
import Feed from "./TabFeed";
import Pin from "./TabPin";

const NavDisplay = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/community">
          <Community />
        </Route>
        <Route exact path="/feed">
          <Feed />
        </Route>
        <Route exact path="/pin">
          <Pin />
        </Route>
      </Switch>
    </div>
  );
};

export default NavDisplay;
