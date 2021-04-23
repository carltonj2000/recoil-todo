import React from "react";
import { useRecoilValue, selector } from "recoil";

import { listState } from "./List";
import { itemState } from "./Item";

const listStatsState = selector({
  key: "listStats",
  get: ({ get }) => {
    const list = get(listState);
    const items = list.map((id) => get(itemState(id)));
    const total = items.length;
    const done = items.filter((item) => item.done).length;
    const todo = items.filter((item) => !item.done).length;
    return { total, done, todo };
  },
});

const Stats = () => {
  const { total, done, todo } = useRecoilValue(listStatsState);
  return (
    <div>
      Total: {total}, To Do: {todo}, Completed: {done}
    </div>
  );
};

export default Stats;
