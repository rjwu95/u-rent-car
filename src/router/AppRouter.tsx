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
  CarDetail,
} from "../pages";
import { CLayout } from "../components";
// import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <CLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contract" component={Contract} />
          <Route exact path="/car" component={Car} />
          <Route exact path="/staff" component={Staff} />
          <Route path="/car/register" component={CarRegister} />
          <Route path="/staff/register" component={StaffRegister} />
          <Route exact path="/customer" component={Customer} />
          <Route path="/customer/register" component={CustomerRegister} />
          <Route path="/car/detail/:id" component={CarDetail} />
        </Switch>
      </CLayout>
    </BrowserRouter>
  );
};

export default Router;
