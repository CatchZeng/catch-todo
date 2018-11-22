import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.state.value.trim()) {
      return;
    }
    this.props.dispatch(addTodo(this.state.value));
    this.setState({
      value: ""
    });
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
