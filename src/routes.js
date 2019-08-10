import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import App from "./components/App";
import ManageCourse from "./components/ManageCourse";
import Courses from "./components/Courses";

const history = createBrowserHistory();

export default (
  <App>
    <Router history={history}>
      <Switch>
        <Route exact path="/manage" component={ManageCourse} />
        <Route exact path="/" component={Courses} />
        <Route exact path="/home" component={Courses} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  </App>
);
