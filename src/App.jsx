import React from "react";
import AddTodo from "./containers/AddTodo.jsx";
import TodoList from "./components/TodoList.jsx";

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
        <TodoList />
      </div>
    );
  }
}
