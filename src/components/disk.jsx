import React from "react";

class Disk extends React.Component {
  state = {
    size: this.props.size,
    sizePx: this.props.size * 20
  };

  diskColors = {
    "1": "red",
    "2": "green",
    "3": "blue",
    "4": "yellow",
    "5": "orange",
    "6": "lightgrey",
    "7": "purple",
    "8": "pink",
    "9": "black",
    "10": "maroon",
    "11": "olive",
    "12": "dodgerBlue",
    "13": "slateBlue",
    "14": "MediumSeaGreen"
  };

  styles = {
    fontWeight: "bold",
    fontSize: "12px",
    width: this.state.sizePx + "px",
    height: "20px",
    display: "block",
    background: this.diskColors[this.state.size],
    padding: "none",
    margin: "auto"
  };

  render() {
    return (
      <div className="disk" style={this.styles}>
        {this.state.size}
      </div>
    );
  }
}

export default Disk;
