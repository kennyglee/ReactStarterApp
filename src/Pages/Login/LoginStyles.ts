import { Theme, createStyles } from "@material-ui/core";

export const LoginStyles = (theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      WebkitTransform: "translate(-50%, -50%)",
      width: "300px",
    },
    actionPanel: {
      marginTop: "0.3rem",
      "&> :first-child": {
        marginRight: "0.3rem",
      },
    },
    error: {
      color: theme.palette.error.dark,
    },
  });
