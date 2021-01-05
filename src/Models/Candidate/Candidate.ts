import { types } from "mobx-state-tree";
import { CANDIDATE } from "../../Constants/NamedEntities/Models";

export const Candidate = types.model(CANDIDATE, {
  name: types.string,
});
