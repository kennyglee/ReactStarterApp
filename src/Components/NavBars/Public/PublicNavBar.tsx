import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export const PublicNavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" color="inherit">
            Hobby Match
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
