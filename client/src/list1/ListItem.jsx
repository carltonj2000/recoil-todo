import React from "react";
import { useRecoilState } from "recoil";

import listState from "./listState";

const replaceAtIndex = (arr, index, newValue) => [
  ...arr.slice(0, index),
  newValue,
  ...arr.slice(index + 1),
];

const removeAtIndex = (arr, index) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
];

const ListItem = ({ item }) => {
  const [list, listSet] = useRecoilState(listState);
  const index = list.findIndex((i) => item === i);

  const doneChanged = () =>
    listSet(replaceAtIndex(list, index, { ...item, done: !item.done }));

  const removeItem = () => listSet((old) => removeAtIndex(old, index));

  return (
    <div className="m-2 p-1 bg-gray-100 shadow flex justify-between items-center">
      <div className="ml-2">{item.do}</div>
      <div className="flex items-center">
        <input type="checkbox" checked={item.done} onChange={doneChanged} />
        <div
          className="mx-2 px-2 rounded-full bg-indigo-100"
          onClick={removeItem}
        >
          x
        </div>
      </div>
    </div>
  );
};

export default ListItem;
