import { types, Instance, getEnv, flow, applySnapshot } from "mobx-state-tree";
import { AxiosResponse } from "axios";
import { IStoreEnv } from "@Interfaces";
import { SESSION_STORE } from "@Constants";
import { AxiosWebClient, createPersist } from "@Utils";

export const Session = types
  .model(SESSION_STORE, {
    token: types.optional(types.string, ""),
    isLoggedIn: types.optional(types.boolean, false),
    isFirstTime: types.optional(types.boolean, false),
  })
  .volatile((self) => ({
    email: "",
    password: "",
    errorMessage: "",
  }))
  .actions((self) => ({
    setEmail(email: string) {
      self.email = email;
    },
    setPassword(password: string) {
      self.password = password;
    },
  }))
  .actions((self) => ({
    reSetIsFirstTime() {
      if (self.isFirstTime) {
        self.isFirstTime = false;
      }
    },
  }))
  .actions((self) => ({
    // authenticate(email: string, password: string) {
    authenticate: flow(function* authenticate() {
      try {
        console.log("snapshot before: ", JSON.stringify(self));

        const response: AxiosResponse<ISession> = yield getEnv<IStoreEnv>(
          self,
        ).Axios.AxiosPostRequests.authenticate(self.email, self.password);

        const { data } = response;

        applySnapshot(self, data);

        self.isLoggedIn = self.token !== "";
        self.isFirstTime = true;

        console.log("snapshot after: ", JSON.stringify(self));
      } catch (e) {
        self.errorMessage = e.message;
      }
    }),
  }));

// eslint-disable-next-line prettier/prettier
export interface ISession extends Instance<typeof Session> { }
export const sessionStore: ISession = Session.create({}, { Axios: AxiosWebClient });
export const persistSessionStore = createPersist({ SESSION_STORE: sessionStore });
export type IPersistSessionStore = typeof persistSessionStore;
