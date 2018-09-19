import React from "react";

import Header from "components/layout/header";
import TodosList from "components/todos";

const App = ({ loading }) => {
  return (
    <div>
      <div className="container grid-lg">
        <Header loading={loading} />
        <div className="columns" style={{ paddingTop: "15px" }}>
          <div className="column col-xs-9">{<TodosList />}</div>
          <div className="column col-xs-3" />
        </div>
      </div>
    </div>
  );
};

export default App;
