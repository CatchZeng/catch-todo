import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li onClick={this.props.onClick}> {this.props.text}</li>;
  }
}
