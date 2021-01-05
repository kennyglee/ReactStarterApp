import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Button } from "@material-ui/core";
import { INavBarComponentProps } from "./PrivateNavBarContainer";
import { persistSessionStore } from "@Stores";

export const PrivateNavBar = ({ SESSION_STORE: { isLoggedIn } }: INavBarComponentProps) => {
  const handleLogoutAction = () => {
    persistSessionStore.purge();
  };

  return (
    <div>
      <AppBar position="static">
        <p>LoggedIn</p>
        <span>
          <Button variant={"contained"} onClick={handleLogoutAction} size="large">
            Logout
          </Button>
        </span>
      </AppBar>
    </div>
  );
};
