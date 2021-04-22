import React from "react";

import Counter from "./counter/Counter";
import List1 from "./list1/List";
import CurrentUser from "./sync/CurrentUser";
import CurrentUserAsync from "./async/CurrentUser";
import CurrentUserAsyncParam from "./asyncParam/CurrentUser";
import Friends from "./friends/Friends";

function App() {
  return (
    <>
      <Counter />
      <CurrentUser />
      <CurrentUserAsync />
      <CurrentUserAsyncParam />
      <Friends />
      <List1 />
    </>
  );
}

export default App;
