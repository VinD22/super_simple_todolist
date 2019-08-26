import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <form onSubmit={evt => this.props.handleSubmit(evt)}>
          <input
            value={this.props.inputValue}
            onChange={evt => this.props.handleChange(evt)}
          />
        </form>
      </div>
    );
  }
}

export default Form;
