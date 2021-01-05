import { applySnapshot, onSnapshot } from "mobx-state-tree";
import { transaction } from "mobx";
import localForage from "localforage";

const getSnapshots = (storesList: any, storage: any) => {
  const promises = storesList.map((storeName: any) => storage.getItem(storeName));

  return Promise.all(promises).then((snapshots) =>
    snapshots.reduce((acc: any, current: any, index) => {
      const storeName = storesList[index];
      acc[storeName] = JSON.parse(current);

      return acc;
    }, {}),
  );
};

const removeSnapshots = (storesList: any, storage: any) => {
  const promises = storesList.map((storeName: any) => storage.removeItem(storeName));

  return Promise.all(promises);
};

const rehydrateOrApplySnapshot = (store: any, snapshot: any) => {
  if (!snapshot) return;

  if (typeof store.rehydrate === "function") {
    store.rehydrate(snapshot);
  } else {
    applySnapshot(store, snapshot);
  }
};

const purgeStore = ([, store]: any) => {
  if (typeof store.purge === "function") {
    store.purge();
  } else {
    applySnapshot(store, {});
  }
};

const attachSnapshotListeners = (stores: any, storage: any) => {
  stores.forEach(([name, store]: any) =>
    onSnapshot(store, (snapshot) => storage.setItem(name, JSON.stringify(snapshot))),
  );
};

const createRehydrate = (storeEntries: any, storage: any) => () => {
  const storesList = storeEntries.map((i: any) => i[0]);

  return getSnapshots(storesList, storage).then((snapshots: any) =>
    transaction(() =>
      storeEntries.forEach(([name, store]: any) => {
        const snapshot = snapshots[name];
        rehydrateOrApplySnapshot(store, snapshot);
      }),
    ),
  );
};

const createPurge = (storeEntries: any, storage: any) => () => {
  const storesList = storeEntries.map((i: any) => i[0]);

  return removeSnapshots(storesList, storage).then(() =>
    transaction(() => storeEntries.forEach(purgeStore)),
  );
};

export const createPersist = (stores: any, config = { storage: null, whitelist: [] }) => {
  let entries = Object.entries(stores);

  const storage = config.storage || localForage;

  if (config.whitelist.length > 0) {
    entries = entries.filter(([name]: any) =>
      // @ts-ignore
      config.whitelist.includes(name),
    );
  }

  attachSnapshotListeners(entries, storage);

  const rehydrate = createRehydrate(entries, storage);
  const purge = createPurge(entries, storage);

  return {
    rehydrate,
    purge,
  };
};
