import { IReactComponent, inject, observer } from "mobx-react";
import { compose } from "recompose";
import { ComponentType } from "react";

import { SESSION_STORE } from "@Constants";
import { ISession } from "@Stores";
import { PrivateNavBar } from "./PrivateNavBar";

export interface INavBarComponentProps {
  [SESSION_STORE]: ISession;
}

type MyComponentType =
  | ComponentType<INavBarComponentProps>
  | IReactComponent<INavBarComponentProps>;

export const PrivateNavBarContainer = compose<any, any>(
  inject(SESSION_STORE),
  observer,
)(PrivateNavBar);
