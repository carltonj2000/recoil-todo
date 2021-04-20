import { atom } from "recoil";

const listState = atom({
  key: "listState",
  default: [
    { do: "a", done: false },
    { do: "b", done: false },
    { do: "c", done: true },
  ],
});

export default listState;
