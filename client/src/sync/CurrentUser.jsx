import React from "react";
import { atom, selector, useRecoilValue } from "recoil";

import tableOfUsers from "./users";

const currentUserIDState = atom({
  key: "CurrentUserID",
  default: 1,
});

const currentUserNameState = selector({
  key: "CurrentUserName",
  get: ({ get }) => {
    return tableOfUsers[get(currentUserIDState)].name;
  },
});

const CurrentUserInfo = () => {
  const userName = useRecoilValue(currentUserNameState);
  return (
    <div className="flex flex-col m-1 p-1 shadow items-center mx-auto max-w-md">
      <h1 className="font-semibold">sync derived state selector</h1>
      <div>{userName}</div>
    </div>
  );
};

export default CurrentUserInfo;
