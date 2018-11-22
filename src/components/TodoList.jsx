import React, { Component } from "react";
import Todo from "./Todo.jsx";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          <Todo key={todo.id} onClick={this.props.onClick(todo.id)} />;
        })}
      </ul>
    );
  }
}

export default TodoList;
