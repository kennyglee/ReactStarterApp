import { IReactComponent, inject, observer } from "mobx-react";
import { compose } from "recompose";
import { ComponentType } from "react";
import { SESSION_STORE } from "@Constants";
import { ISession } from "@Stores";
import { App } from "./App";

export interface IAppComponentProps {
  [SESSION_STORE]: ISession;
}

type MyComponentType = ComponentType<IAppComponentProps> | IReactComponent<IAppComponentProps>;

export const AppContainer = compose<any, any>(inject(SESSION_STORE), observer)(App);
