import React from "react";

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
        <h1>Todos</h1>
      </div>
    );
  }
}
