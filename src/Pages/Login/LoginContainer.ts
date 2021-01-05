import { withRouter } from "react-router-dom";
import { WithStyles, withStyles } from "@material-ui/styles";
import { inject, observer } from "mobx-react";
import { compose } from "recompose";

import { ISession } from "@Stores";
import { SESSION_STORE } from "@Constants";
import { Login } from "./Login";
import { LoginStyles } from "./LoginStyles";

export interface ILoginComponentProps extends WithStyles<typeof LoginStyles> {
  [SESSION_STORE]: ISession;
  history: any;
}

export const LoginContainer = compose<any, any>(
  withRouter,
  withStyles(LoginStyles, { withTheme: true }),
  inject(SESSION_STORE),
  observer,
)(Login);
