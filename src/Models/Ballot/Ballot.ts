import { types } from "mobx-state-tree";
import { BALLOT } from "../../Constants/NamedEntities/Models";

export const Ballot = types.model(BALLOT, {
  name: types.string,
});
