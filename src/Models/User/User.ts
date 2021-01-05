import { types } from "mobx-state-tree";
import { USER } from "../../Constants";

export const User = types.model(USER, {
  email: types.string,
  name: types.string,
});
