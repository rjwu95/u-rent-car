import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

export default function PrivateRoute({ page: Page, ...rest }) {
  const token = useSelector((state) => state.auth?.entities?.token);
  if (!token)
    return (
      <Route
        {...rest}
        component={Page}
        render={() => <Redirect to={{ pathname: "/login" }} />}
      />
    );
  return <Route {...rest} component={Page} render={() => <Page {...rest} />} />;
}
