import React from "react";
import { atom, selector, selectorFamily, useRecoilValue } from "recoil";

const currentUserIDState = atom({
  key: "UserID",
  default: null,
});

const userInfoQuery = selectorFamily({
  key: "UserInfoQuery",
  get: (userID) => async () => {
    const resp = await fetch(`http://localhost:3456/user/${userID}`).then((r) =>
      r.json()
    );
    if (resp.error) throw resp.error;
    return resp;
  },
});

const currentUserInfoQuery = selector({
  key: "CurrentUserInfoQuery",
  get: async ({ get }) => get(userInfoQuery(get(currentUserIDState))),
});

const CurrentUserInfo = () => {
  const currentUser = useRecoilValue(currentUserInfoQuery);
  return (
    <div className="flex m-1 p-1 shadow justify-center mx-auto max-w-md">
      {currentUser.name} - async parameter based selector
    </div>
  );
};

export default CurrentUserInfo;
