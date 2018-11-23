import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App.jsx";
import reducers from "./reducers";

const store = createStore(reducers);

store.subscribe(() => {
  console.log(store.getState());
});

ReactDom.render(
  <Provider store={store}>
    <App name="Catch Todo" />
  </Provider>,
  document.getElementById("root")
);
