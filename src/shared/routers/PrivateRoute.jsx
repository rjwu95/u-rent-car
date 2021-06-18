import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { fetchMe } from "../../auth/authReducer";

export default function PrivateRoute({ page: Page, ...rest }) {
  const token = useSelector((state) => state.auth?.entities?.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      dispatch(fetchMe());
    }
  }, [dispatch]);

  return (
    // history를 props으로 넘기기 위해서 분기처리
    <Route {...rest} component={token && Page}>
      {!token && <Redirect to="/login" />}
    </Route>
  );
}
