import React from "react";

function ListItem({ item }) {
  return (
    <div className="m-1 p-1 bg-gray-100 shadow flex space-between justify-between">
      <div>{item.do}</div>
      <input type="checkbox" checked={item.done} />
    </div>
  );
}

export default ListItem;
