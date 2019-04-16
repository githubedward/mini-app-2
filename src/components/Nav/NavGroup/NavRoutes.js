import React from "react";
import { Route, Switch } from "react-router-dom";
// components/styles
import Home from "./TabHome";
import Community from "./TabCommunity";
import Places from "./TabPlaces";

const NavRoutes = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/home">
          <Home {...props} />
        </Route>
        <Route exact path="/community">
          <Community {...props} />
        </Route>
        <Route exact path="/places">
          <Places {...props} />
        </Route>
      </Switch>
    </div>
  );
};

export default NavRoutes;
