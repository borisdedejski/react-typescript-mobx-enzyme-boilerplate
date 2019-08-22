import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";
import { DataStore } from "./stores/data-store";
import Todos from "./components/todos";

const App = () => {
  const dataStore = new DataStore();

  return (
    <Provider dataStore={dataStore}>
      <BrowserRouter>
        <Route path="/" component={Todos} />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
