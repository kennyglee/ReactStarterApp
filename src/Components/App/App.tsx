import React from "react";
import { Public, PrivateRoutesContainer } from "@Routes";
import { IAppComponentProps } from "./AppContainer";

export const App = ({ SESSION_STORE: { isLoggedIn } }: IAppComponentProps) => {
  if (isLoggedIn) {
    return <PrivateRoutesContainer />;
    // return import("@Routes/Private/PrivateRoutesContainer");
  } else {
    return <Public />;
    // return import("@Routes/Public/index");
  }
};
