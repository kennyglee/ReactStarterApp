import React from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import { ILoginComponentProps } from "./LoginContainer";

export const Login = ({
  SESSION_STORE: { authenticate, setEmail, setPassword, errorMessage },
  classes,
  history,
}: ILoginComponentProps) => {
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleSignUpButton = () => history.push("/signup");

  return (
    <div className={classes.root}>
      <Grid container direction={"column"} spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="email-input"
            label="email"
            type="email"
            onChange={handleEmailChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={handlePasswordChange}
          />
        </Grid>
        <Grid item xs={12}>
          <span className={classes.error}>{errorMessage}</span>
        </Grid>
        <Grid container item className={classes.actionPanel} justify={"flex-end"} xs={12}>
          <Button variant={"contained"} onClick={authenticate}>
            Login
          </Button>
          <Button variant={"contained"} onClick={() => handleSignUpButton()}>
            SignUp
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
