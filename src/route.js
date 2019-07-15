import React from "react";
import { Router, Route } from "react-router";

/** Component */
import App from "./App";
import Sales from "./components/Sales";

const Routes = props => (
  <Router {...props}>
    <Route exact path="/" component={App} />
    <Route path="/sales" component={Sales} />
  </Router>
);

export default Routes;
