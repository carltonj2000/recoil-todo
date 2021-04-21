import React from "react";
import { selectorFamily, useRecoilValue } from "recoil";

import ErrorBoundary from "../ErrorBoundary";

const currentUserNameState = selectorFamily({
  key: "CurrentUserNameAsyncParam",
  get: (userID) => async () => {
    const resp = await fetch(`http://localhost:3456/user/${userID}`).then((r) =>
      r.json()
    );
    if (resp.error) throw resp.error;
    return resp.name;
  },
});

const CurrentUserInfo = ({ userID }) => {
  const userName = useRecoilValue(currentUserNameState(userID));
  return <div>{userName}</div>;
};

const SubApp = () => (
  <ErrorBoundary>
    <React.Suspense fallback={<div>Loading ...</div>}>
      <div className="flex flex-col m-1 p-1 shadow items-center mx-auto max-w-md">
        <h1 className="font-semibold">async parameter based selector</h1>
        <CurrentUserInfo userID={2} />
        <CurrentUserInfo userID={3} />
      </div>
    </React.Suspense>
  </ErrorBoundary>
);

export default SubApp;
