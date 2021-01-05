import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { Provider } from "mobx-react";

import * as serviceWorker from "@serviceWorker";

import { AppContainer } from "@Components";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

// const AppContainer = () =>
// import(/* webpackChunkName: "AppContainer" */ "@Components/App/AppContainer");

const renderApp = async (Root: any, sessionStore: any) => {
  // const renderApp = async (Root: ComponentType, sessionStore: any) => {
  ReactDOM.render(
    <Provider SESSION_STORE={sessionStore}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Root />
        </Router>
      </ThemeProvider>
    </Provider>,
    document.getElementById("root"),
  );
};

//TODO--
// NOTE it would not work in this case?
// investigate
import("@Stores").then((expo) => {
  const { persistSessionStore, sessionStore } = expo;
  persistSessionStore.rehydrate().then(() => renderApp(AppContainer, sessionStore));
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
