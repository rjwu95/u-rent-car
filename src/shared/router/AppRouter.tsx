import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
import { Home } from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <CLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contract" component={Contract} />
          <Route exact path="/car" component={Car} />
          <Route exact path="/staff" component={Staff} />
          <Route path="/car/register" component={CarRegister} />
          <Route path="/staff/register" component={StaffRegister} />
          <Route exact path="/customer" component={Customer} />
          <Route path="/customer/register" component={CustomerRegister} />
          <Route path="/car/detail/:id" component={CarDetail} />
          <Route path="/customer/detail/:id" component={CustomerDetail} />
          <Route path="/contract/detail/:id" component={ContractDetail} />
          <Route path="/contract/register" component={ContractRegister} />
        </Switch>
      </CLayout>
    </BrowserRouter>
  );
};

export default Router;
