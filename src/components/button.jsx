import React from "react";

class Button extends React.Component {
  state = {};

  styles = {};

  render() {
    return (
      <button
        className="button"
        style={this.styles}
        onClick={this.props.onClick}
      >
        Click me
      </button>
    );
  }
}

export default Button;
