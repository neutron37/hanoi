import React, { Component } from "react";
import TowerGroup from "./components/towerGroup";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TowerGroup />
        </header>
      </div>
    );
  }
}

export default App;
