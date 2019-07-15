import React from "react";
import { Router, Route } from "react-router";

/** Component */
import { Toggle } from "./components/Toggle";
import { SearchSales } from "./components/SearchSales";

const Routes = props => (
  <Router {...props}>
    <Route exact path="/" component={Toggle} />
    <Route path="/Sales" component={SearchSales} />
  </Router>
);

export default Routes;
