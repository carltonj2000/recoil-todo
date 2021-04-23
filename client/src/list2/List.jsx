import React from "react";
import { atom, useRecoilState } from "recoil";

import ErrorBoundary from "../ErrorBoundary";
import Item, { itemState } from "./Item";
import AddItem from "./AddItem";
import Stats from "./Stats";

export const listState = atom({ key: "list", default: [] });

const List = () => {
  const [list, listSet] = useRecoilState(listState);
  //const deleteId = (id) => listSet((old) => old.filter((i) => i === id));
  return (
    <>
      {list.map((id) => (
        <Item key={id} {...{ id }} />
      ))}
    </>
  );
};

const SubApp = () => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading ...</div>}>
        <div className="flex flex-col m-1 p-4 shadow-lg items-center mx-auto max-w-xl bg-gray-50">
          <h1 className="font-semibold">List With Atom Per Item</h1>
          <Stats />
          <AddItem />
          <List />
        </div>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default SubApp;
