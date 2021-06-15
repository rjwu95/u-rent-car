import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "../../auth/pages/Login";
import { Car, CarDetail, CarRegister } from "../../car/pages";
import {
  Contract,
  ContractDetail,
  ContractRegister,
} from "../../contract/pages";
import {
  Customer,
  CustomerDetail,
  CustomerRegister,
} from "../../customer/pages";
import { Staff, StaffRegister } from "../../staff/pages";
import { CLayout } from "../components";
import { PageNotFound, Home } from "../pages";
import PrivateRoute from "./PrivateRoute";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <CLayout>
          <Switch>
            <PrivateRoute exact path="/" page={Home} />
            <PrivateRoute exact path="/contract" page={Contract} />
            <PrivateRoute
              exact
              path="/contract/detail/:id"
              page={ContractDetail}
            />
            <PrivateRoute
              exact
              path="/contract/register"
              page={ContractRegister}
            />
            <PrivateRoute exact path="/car" page={Car} />
            <PrivateRoute exact path="/car/register" page={CarRegister} />
            <PrivateRoute exact path="/car/detail/:id" page={CarDetail} />
            <PrivateRoute exact path="/staff" page={Staff} />
            <PrivateRoute exact path="/staff/register" page={StaffRegister} />
            <PrivateRoute exact path="/customer" page={Customer} />
            <PrivateRoute
              exact
              path="/customer/register"
              page={CustomerRegister}
            />
            <PrivateRoute
              exact
              path="/customer/detail/:id"
              page={CustomerDetail}
            />
            <Route component={PageNotFound} />
          </Switch>
        </CLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
