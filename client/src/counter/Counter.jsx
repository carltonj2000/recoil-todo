import React from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import counterState from "./counterState";

function Counter() {
  const count = useRecoilValue(counterState);
  const countSet = useSetRecoilState(counterState);
  const incCount = () => countSet((oldCount) => oldCount + 1);
  const decCount = () => countSet((oldCount) => oldCount - 1);
  return (
    <div className="m-1 p-2 shadow w-auto">
      Count: {count}{" "}
      <span
        className="m-1 py-1 px-2 rounded-xl bg-indigo-100"
        onClick={incCount}
      >
        +
      </span>{" "}
      <span
        className="m-1 py-1 px-2 rounded-xl bg-indigo-100"
        onClick={decCount}
      >
        -
      </span>
    </div>
  );
}

export default Counter;
