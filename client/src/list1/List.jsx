import React from "react";
import { useRecoilValue } from "recoil";
import listState from "./listState";
import ListItem from "./ListItem";
import listStatsState from "./listStatsState";
import ListItemAdd from "./ListItemAdd";

function List() {
  const listItems = useRecoilValue(listState);
  const listStats = useRecoilValue(listStatsState);
  return (
    <div className="max-w-xl mx-auto bg-gray-50 shadow-lg p-2 m-2">
      <h1 className="text-center">
        <span className="text-xl font-semibold">List Items </span>( Total:{" "}
        {listStats.total}, To Do: {listStats.todo}, Completed:{" "}
        {listStats.completed} )
      </h1>
      <ListItemAdd />
      {listItems.map((item, k) => (
        <ListItem {...{ item }} key={k} />
      ))}
    </div>
  );
}

export default List;
