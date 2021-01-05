import { IReactComponent, inject, observer } from "mobx-react";
import { withRouter } from "react-router";
import { ComponentType } from "react";
import { compose } from "recompose";

import { SESSION_STORE } from "@Constants";
import { ISession } from "@Stores";
import { Private } from "./Private";

export interface IPrivateRoutesComponentProps {
  [SESSION_STORE]: ISession;
}

type MyComponentType =
  | ComponentType<IPrivateRoutesComponentProps>
  | IReactComponent<IPrivateRoutesComponentProps>;

export const PrivateRoutesContainer = compose<any, any>(
  // withRouter,
  inject(SESSION_STORE),
  observer,
)(Private);
