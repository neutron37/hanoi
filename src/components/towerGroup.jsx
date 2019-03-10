import React from "react";
import Tower from "./tower";
import Button from "./button";

class TowerGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      towers: {
        a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        b: [],
        c: []
      }
    };
  }

  styles = {
    fontWeight: "bold",
    fontSize: "20px",
    padding: "1em",
    textAlign: "center",
    backgroundColor: "grey"
  };

  getMaxDiscWidth() {
    var sizes = [];
    // Create a single list of all disk sizes
    Object.keys(this.state.towers).map(
      tower => (sizes = sizes.concat(this.state.towers[tower]))
    );
    return sizes.reduce(function(prev, current) {
      return prev > current ? prev : current;
    });
  }

  getSumDisksHeight() {
    var sizes = [];
    // Create a single list of all disk sizes
    Object.keys(this.state.towers).map(
      tower => (sizes = sizes.concat(this.state.towers[tower]))
    );
    return sizes.length ? sizes.length : 0;
  }

  render() {
    return (
      <div id="game">
        <div id="towers" className="container" style={this.styles}>
          {Object.keys(this.state.towers).map(tower => (
            <Tower
              key={tower}
              disks={this.state.towers[tower]}
              maxDiscWidth={this.getMaxDiscWidth()}
              sumDisksHeight={this.getSumDisksHeight()}
            />
          ))}
        </div>
        {this.renderButton()}
      </div>
    );
  }

  handleClick() {
    console.log("clicked");
    this.solve(this.getMaxDiscWidth(), "a", "c", "b");
  }

  renderButton() {
    return <Button onClick={() => this.handleClick()} />;
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async solve(n, from_rod, to_rod, aux_rod) {
    if (n === 1) {
      this.state.towers[to_rod].push(this.state.towers[from_rod].pop());
      this.setState({ towers: this.state.towers });
      console.log(
        "Move disk " + n + " from rod " + from_rod + " to rod " + to_rod
      );
      return;
    }
    this.solve(n - 1, from_rod, aux_rod, to_rod);

    this.state.towers[to_rod].push(this.state.towers[from_rod].pop());
    this.setState({ towers: this.state.towers });
    console.log(
      "Move disk " + n + " from rod " + from_rod + " to rod " + to_rod
    );

    this.solve(n - 1, aux_rod, to_rod, from_rod);
  }
}

export default TowerGroup;
