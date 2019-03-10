import React from "react";
import Disk from "./disk";

class Tower extends React.Component {
  state = {
    disks: this.props.disks,
    id: this.props.id,
    maxDiscWidth: this.props.maxDiscWidth,
    sumDisksHeight: this.props.sumDisksHeight,
    paddingTop: this.props.paddingTop,
    styles: {
      display: "inline-block",
      textAlign: "center",
      position: "relative",
      width: this.props.maxDiscWidth * 20 + "px",
      paddingBottom: 0,
      backgroundImage:
        "url(" +
        "https://upload.wikimedia.org/wikipedia/commons/5/58/Location_arithmetic_vertical.svg" +
        ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "repeat-y",
      marginBottom: "-10px",
      height: this.props.sumDisksHeight * 20
    }
  };

  render() {
    var styles = {};
    const returnedTarget = Object.assign(styles, this.state.styles);
    console.log(styles);
    styles.paddingTop =
      this.props.sumDisksHeight * 20 - this.props.disks.length * 20 + 20 + "px";
    return (
      <React.Fragment>
        <div className="tower" id={this.state.id} style={styles}>
          {this.state.disks.map(diskSize => (
            <Disk key={diskSize} size={diskSize} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Tower;
