// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterResident from "./RegisterResident";
import LoginResident from "./LoginResident";
import LogoutResident from "./LogoutResident";
import Dashboard from "./Dashboard"; // This is a placeholder for your dashboard

function UserRoutes() {
  return (
    <Router>
      <div>
        <h1>Resident Portal</h1>
        <Switch>
          <Route path="/register" component={RegisterResident} />
          <Route path="/login" component={LoginResident} />
          <Route path="/logout" component={LogoutResident} />
          <Route path="/dashboard" component={Dashboard} /> {/* Placeholder */}
          <Route path="/" exact component={LoginResident} />
        </Switch>
      </div>
    </Router>
  );
}

export default UserRoutes;
