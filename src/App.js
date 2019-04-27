import React, { Component } from "react";
import Picture from "./components/Picture";
import Mesh from "./components/Mesh";
import "./App.scss";
import axios from "axios";
import { topGridStart, bottomGridStart } from "./constants/startingPositions";
require("dotenv").config();

class App extends Component {
  state = {
    topImages: [],
    bottomImages: [],
    currentID: ""
  };
  onHoverIn = e => {
    console.log(e, "Mouse In");
  };
  onHoverOut = e => {
    console.log(e, "Mouse Out");
  };

  componentDidMount() {
    const apiKey = "Bearer " + process.env.REACT_APP_AIRTABLE_KEY;
    axios
      .get("https://api.airtable.com/v0/appjyRSLnk3amftj3/Table%201", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: apiKey
        }
      })
      .then(res => {
        const images = res.data.records.map(item => item.fields.Attachments[0]);
        this.setState({
          topImages: images.slice(0, 9),
          bottomImages: images.slice(9, 18)
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        <Mesh
          onHoverIn={this.onHoverIn}
          onHoverOut={this.onHoverOut}
          images={this.state.topImages}
          startImage={topGridStart}
        />
        <Mesh
          onHoverIn={this.onHoverIn}
          onHoverOut={this.onHoverOut}
          images={this.state.bottomImages}
          startImage={bottomGridStart}
        />
      </div>
    );
  }
}

export default App;
