import React from "react";
import { CircularProgress } from "@material-ui/core";

interface IProps {
  moduleProvider: any;
}
export const AsyncComponent = ({ moduleProvider }: IProps) => {
  const [Component, setComponent] = React.useState(null as any);

  import(/* webpackChunkName: "lodash" */ "lodash").then(({ default: _ }) => {
    moduleProvider().then((Module: any) => {
      const matchedComponents = _.filter(Module, (X) => typeof X === "function");

      setComponent(() => matchedComponents[0]);
    });
  });

  return <div>{Component ? <Component /> : <CircularProgress />}</div>;
};
