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
    <div className="flex m-1 p-1 shadow justify-center mx-auto max-w-md">
      {userName}
    </div>
  );
};

export default CurrentUserInfo;
