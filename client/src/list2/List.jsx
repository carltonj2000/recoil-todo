import { atom } from "recoil";

let key = 0;
const getNextKey = () => key++;

const listState = atomFamily({
  key: "listAfState",
  default: selectorFamily ({

  })
    { do: "a", done: false },
    { do: "b", done: false },
    { do: "c", done: true },
  ],
});

export default listState;
