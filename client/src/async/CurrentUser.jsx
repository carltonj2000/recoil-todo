import React from "react";
import { atom, selector, useRecoilValue } from "recoil";

import ErrorBoundary from "../ErrorBoundary";

const currentUserIDState = atom({
  key: "CurrentUserIDAsync",
  default: 0,
});

const currentUserNameState = selector({
  key: "CurrentUserNameAsync",
  get: async ({ get }) => {
    const resp = await fetch(
      `http://localhost:3456/user/${get(currentUserIDState)}`
    ).then((r) => r.json());
    if (resp.error) throw resp.error;
    return resp.name;
  },
});

const CurrentUserInfo = () => {
  const userName = useRecoilValue(currentUserNameState);
  return <div>{userName}</div>;
};

const SubApp = () => (
  <ErrorBoundary>
    <React.Suspense fallback={<div>Loading ...</div>}>
      <div className="flex flex-col m-1 p-1 shadow items-center mx-auto max-w-md">
        <h1 className="font-semibold">async derived state selector</h1>
        <CurrentUserInfo />
      </div>
    </React.Suspense>
  </ErrorBoundary>
);
export default SubApp;
