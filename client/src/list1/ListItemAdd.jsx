import React, { useState, useRef } from "react";
import { useSetRecoilState } from "recoil";

import listState from "./listState";

const ListItemAdd = () => {
  const listSet = useSetRecoilState(listState);
  const [item, itemSet] = useState("");
  const inputRef = useRef(null);
  const addItem = () => {
    if (!item) return;
    listSet((old) => [...old, { do: item, done: false }]);
    itemSet("");
    inputRef.current.focus();
  };

  const handleKeypress = (e) => e.charCode === 13 && addItem();

  return (
    <div className="flex">
      <button
        className="py-1 px-2 m-1 bg-indigo-50 shadow rounded"
        onClick={addItem}
      >
        Add
      </button>
      <input
        type="text"
        className="border-2 w-full"
        value={item}
        onChange={(e) => itemSet(e.target.value)}
        ref={inputRef}
        onKeyPress={handleKeypress}
      />
    </div>
  );
};

export default ListItemAdd;
