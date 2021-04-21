import React from "react";
import { atom, selector, useRecoilValue } from "recoil";

const currentUserIDState = atom({
  key: "CurrentUserIDAsync",
  default: 1,
});

const currentUserNameState = selector({
  key: "CurrentUserNameAsync",
  get: async ({ get }) => {
    const resp = await fetch("http://localhost:3456/user/0").then((r) =>
      r.json()
    );
    if (resp.error) throw resp.error;
    return resp.name;
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
