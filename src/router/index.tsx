import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Car, Contract, Staff } from "../pages";
import { CLayout } from "../components";
// import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <CLayout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contract">
            <Contract />
          </Route>
          <Route path="/car">
            <Car />
          </Route>
          <Route path="/staff">
            <Staff />
          </Route>
        </Switch>
      </CLayout>
    </BrowserRouter>
  );
};

export default Router;
