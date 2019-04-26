import React, { Component } from "react";
import Picture from "./components/Picture";
import Mesh from "./components/Mesh";
import "./App.css";
import axios from "axios";
require("dotenv").config();

class App extends Component {
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
        const images = res.data;
        console.log(images);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
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
