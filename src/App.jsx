import React from "react";
import AddTodo from "./components/AddTodo";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }

  render() {
    return (
      <div>
        <AddTodo />
      </div>
    );
  }
}
