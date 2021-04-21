import React from "react";

import Counter from "./counter/Counter";
import List1 from "./list1/List";
import CurrentUser from "./sync/CurrentUser";
import CurrentUserAsync from "./async/CurrentUser";
import ErrorBoundary from "./ErorBoundary";
import CurrentUserAsyncParam from "./asyncParam/CurrentUser";

function App() {
  return (
    <>
      <Counter />
      <CurrentUser />
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading ...</div>}>
          <CurrentUserAsync />
        </React.Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading ...</div>}>
          <CurrentUserAsyncParam userID={2} />
          <CurrentUserAsyncParam userID={3} />
        </React.Suspense>
      </ErrorBoundary>
      <List1 />
    </>
  );
}

export default App;
