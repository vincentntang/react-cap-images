import React, { Component } from "react";
import Picture from "./components/Picture";
import Mesh from "./components/Mesh";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mesh />
        <Picture />
      </div>
    );
  }
}

export default App;
