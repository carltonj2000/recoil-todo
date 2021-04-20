import { selector } from "recoil";

import listState from "./listState";

const listStatsState = selector({
  key: "listStatsState",
  get: ({ get }) => {
    const items = get(listState);
    const completed = items.filter((i) => i.done).length;
    const todo = items.length - completed;
    return { total: items.length, completed, todo };
  },
});

export default listStatsState;
