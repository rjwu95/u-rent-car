import React from "react";
import { Redirect, Route } from "react-router";

export default function PrivateRoute({ page: Page, ...rest }) {
  const token = sessionStorage.getItem("token");

  return (
    // history를 props으로 넘기기 위해서 분기처리
    <Route {...rest} component={!!token && Page}>
      {!token && <Redirect to="/login" />}
    </Route>
  );
}
