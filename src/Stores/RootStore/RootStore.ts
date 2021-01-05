import { types, Instance } from "mobx-state-tree";
import { ROOT_STORE, CANDIDATE_STORE } from "@Constants";
import { Candidate } from "@Models";

export const RootStore = types.model(ROOT_STORE, {
  [CANDIDATE_STORE]: types.optional(types.map(Candidate), {}),
});

export interface IRootStore extends Instance<typeof RootStore> {}
