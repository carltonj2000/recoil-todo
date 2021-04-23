import React from "react";
import { atomFamily, useRecoilState } from "recoil";

export const itemState = atomFamily({
  key: "item",
  default: { todo: "", done: false },
});

const Item = ({ id }) => {
  const [{ todo, done }, itemSet] = useRecoilState(itemState(id));
  return (
    <div className="flex items-center justify-between m-2 p-2 bg-gray-100 shadow w-full">
      <p>{todo}</p>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={done}
          onChange={() => itemSet(({ todo, done }) => ({ todo, done: !done }))}
        />
        <div className="mx-2 px-2 rounded-full bg-indigo-100">x</div>
      </div>
    </div>
  );
};

export default Item;
