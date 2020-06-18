import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Layout from "./views/layouts";
import AuthGuard from "./views/Auth/AuthGuard";
import LoginView from "./views/Auth/LoginView";
import RegisterView from "./views/Auth/RegisterView";
import ProfilesBody from "./views/Profiles";
import HistoryBody from "./views/History/HistoryTable";
import FuelQuoteTabular from "./views/FuelQuote/FuelQuoteForm";

function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login" component={LoginView} />
      <Route exact path="/register" component={RegisterView} />
      {/* AUTH  GUARD */}
      <AuthGuard
        path="/app"
        render={(props) => (
          <Layout {...props}>
            <Switch>
              <Redirect exact from="/app" to="/app/profiles" />
              <Route exact path="/app/history" component={HistoryBody} />
              <Route exact path="/app/profiles" component={ProfilesBody} />
              <Route exact path="/app/fuelquote" component={FuelQuoteTabular} />
            </Switch>
          </Layout>
        )}
      />
    </Switch>
  );
}

export default Routes;
