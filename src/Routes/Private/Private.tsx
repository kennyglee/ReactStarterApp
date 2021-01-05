import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "mobx-react";

import { AxiosWebClient } from "@Utils";
import { RootStore, IRootStore } from "@Stores";
import { NewsFeed, NotFoundPage } from "@Pages";
import { IPrivateRoutesComponentProps } from "./PrivateRoutesContainer";

const rootStore: IRootStore = RootStore.create({}, { Axios: AxiosWebClient });

export const Private = ({
  SESSION_STORE: { isFirstTime, reSetIsFirstTime },
}: IPrivateRoutesComponentProps) => {
  return (
    <Provider {...rootStore}>
      <Switch>
        <Route exact={true} path="/" component={NewsFeed} />
        {/* fill in the Page */}
        <Route exact={true} path="/addCandidate" component={NewsFeed} />
        <Route exact={true} path="/other" component={NewsFeed} />
        {/* this Route should stay, used to configure change from public to private routes */}
        {window.location.pathname === "/login" &&
          isFirstTime &&
          (() => {
            reSetIsFirstTime();
            return <Redirect from="/login" to="/" />;
          })()}
        <Route component={NotFoundPage} />
      </Switch>
    </Provider>
  );
};
