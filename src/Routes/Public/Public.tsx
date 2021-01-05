import React, { PureComponent, Component } from "react";
import { Switch, Route } from "react-router-dom";
import { AsyncComponent } from "@Components";

const Landing = () => import(/* webpackChunkName: "Landing" */ "@Pages/Landing");
const SignUp = () => import(/* webpackChunkName: "SignUp" */ "@Pages/SignUp");
const LoginContainer = () =>
  import(/* webpackChunkName: "LoginContainer" */ "@Pages/Login/LoginContainer");
const NotFoundPage = () => import(/* webpackChunkName: "NotFoundPage" */ "@Pages/NotFound");

export const Public = () => {
  return (
    <Switch>
      <Route
        exact={true}
        path="/"
        component={() => <AsyncComponent moduleProvider={Landing} />}
      />
      <Route path="/signup" component={() => <AsyncComponent moduleProvider={SignUp} />} />
      <Route
        path="/login"
        component={() => <AsyncComponent moduleProvider={LoginContainer} />}
      />
      <Route component={() => <AsyncComponent moduleProvider={NotFoundPage} />} />
    </Switch>
  );
};
