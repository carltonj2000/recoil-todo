import React from "react";
import {
  atom,
  selector,
  selectorFamily,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

import ErrorBoundary from "../ErrorBoundary";

const currentUserIDState = atom({
  key: "UserID",
  default: 0,
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
  key: "CurrentUserIQ",
  get: async ({ get }) => get(userInfoQuery(get(currentUserIDState))),
});

const friendsInfoQuery = selector({
  key: "FriendsInfoQuery",
  get: ({ get }) => {
    const { friends } = get(currentUserInfoQuery);
    return friends.map((friendID) => get(userInfoQuery(friendID)));
  },
});

const CurrentUserInfo = () => {
  const currentUser = useRecoilValue(currentUserInfoQuery);
  const friends = useRecoilValue(friendsInfoQuery);
  const setCurrentUserID = useSetRecoilState(currentUserIDState);
  return (
    <div className="flex flex-col m-1 p-1 shadow items-center mx-auto max-w-md">
      <h1 className="font-bold">data flow - selector</h1>
      <p>
        <span className="font-semibold text-gray-700">{currentUser.name}</span>
        's friends
      </p>
      {friends.map((friend) => (
        <div
          key={friend.userId}
          onClick={() => setCurrentUserID(friend.userId)}
        >
          {friend.name}
        </div>
      ))}
    </div>
  );
};

const SubApp = () => (
  <ErrorBoundary>
    <React.Suspense fallback={<div>Loading ...</div>}>
      <CurrentUserInfo />
    </React.Suspense>
  </ErrorBoundary>
);

export default SubApp;
