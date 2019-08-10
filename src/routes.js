import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import App from "./components/App";
import ManageCourse from "./components/ManageCourse";
import Courses from "./components/Courses";
import CourseView from "./components/CourseView";
import ModuleView from "./components/ModuleView";

const history = createBrowserHistory();

export default (
  <App>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Courses} />
        <Route exact path="/course" component={Courses} />
        <Route exact path="/course/:courseId" component={CourseView} />
        <Route exact path="/manage" component={ManageCourse} />
        <Route exact path="/module/:moduleId" component={ModuleView} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  </App>
);
