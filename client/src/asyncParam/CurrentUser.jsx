import React from "react";
import { atom, selectorFamily, useRecoilValue } from "recoil";

const currentUserIDState = atom({
  key: "CurrentUserIDAsyncParam",
  default: 1,
});

const currentUserNameState = selectorFamily({
  key: "CurrentUserNameAsyncParam",
  get: (userID) => async ({ get }) => {
    const resp = await fetch(`http://localhost:3456/user/${userID}`).then((r) =>
      r.json()
    );
    if (resp.error) throw resp.error;
    return resp.name;
  },
});

const CurrentUserInfo = ({ userID }) => {
  const userName = useRecoilValue(currentUserNameState(userID));
  return (
    <div className="flex m-1 p-1 shadow justify-center mx-auto max-w-md">
      {userName}
    </div>
  );
};

export default CurrentUserInfo;
