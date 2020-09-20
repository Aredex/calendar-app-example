import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import CalendarScreen from "../components/calendar/CalendarScreen";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter}></Route>
          <Route exact path="/" component={CalendarScreen}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
