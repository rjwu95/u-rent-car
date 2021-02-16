import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Home,
  Car,
  Contract,
  Staff,
  CarRegister,
  StaffRegister,
  Customer,
  CustomerRegister,
} from "../pages";
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
          <Route exact path="/car">
            <Car />
          </Route>
          <Route exact path="/staff">
            <Staff />
          </Route>
          <Route path="/car/register">
            <CarRegister />
          </Route>
          <Route path="/staff/register">
            <StaffRegister />
          </Route>
          <Route exact path="/customer">
            <Customer />
          </Route>
          <Route path="/customer/register">
            <CustomerRegister />
          </Route>
        </Switch>
      </CLayout>
    </BrowserRouter>
  );
};

export default Router;
