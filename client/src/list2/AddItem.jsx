import React from "react";
import { useRecoilValue, useRecoilCallback, useSetRecoilState } from "recoil";

import { listState } from "./List";
import { itemState } from "./Item";

const AddItem = () => {
  const [todo, todoSet] = React.useState("");
  const list = useRecoilValue(listState);
  const addItem = useRecoilCallback(({ set }) => {
    return (todo) => {
      const id = list.length;
      set(listState, (list) => [...list, id]);
      set(itemState(id), { todo, done: false });
      todoSet("");
    };
  });
  return (
    <input
      type="text"
      value={todo}
      onChange={(e) => todoSet(e.target.value)}
      onKeyPress={(e) => e.charCode === 13 && addItem(todo)}
      className="border-2 p-1"
    />
  );
};

export default AddItem;
