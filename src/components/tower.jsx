import React from "react";
import Disk from "./disk";

class Tower extends React.Component {
  state = {
    disks: this.props.disks,
    id: this.props.id,
    maxDiscWidth: this.props.maxDiscWidth,
    sumDisksHeight: this.props.sumDisksHeight
  };

  styles = {
    paddingTop:
      (this.props.sumDisksHeight - this.props.disks.length) * 20 + 20 + "px",
    display: "inline-block",
    textAlign: "center",
    position: "relative",
    width: this.state.maxDiscWidth * 20 + "px",
    backgroundImage:
      "url(" +
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Location_arithmetic_vertical.svg" +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y"
  };

  render() {
    return (
      <React.Fragment>
        <div className="tower" id={this.state.id} style={this.styles}>
          {this.state.disks.map(diskSize => (
            <Disk key={diskSize} size={diskSize} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Tower;
