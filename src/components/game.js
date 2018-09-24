import React, { Component } from "react";
import images from "../imgArray.json";
import NavBar from "./navbar";
import Card from "./card";

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      right: 0,
      wrong: 0,
      imgArray: images,
      lastPicked: 0
    };
  }
  handleClick = event => {
    let { value } = event.target.attributes.value;
    let numForState = Number(value);

    if (this.state.lastPicked === numForState) {
      this.setState({ right: this.state.right + 1 });
    } else {
      this.setState({ wrong: this.state.wrong + 1 });
    }

    let randomNum = Math.floor(Math.random() * 10);
    if (randomNum === 4) {
      this.setState({ lastPicked: numForState });
    } else {
      this.setState({ lastPicked: randomNum });
    }
    if (this.state.wrong === 10) {
      alert("You have lost!")
      this.setState({right: 0,wrong: 0})
    }
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col s12">
            <NavBar right={this.state.right} wrong={this.state.wrong} />
          </div>
        </div>
        <div className="jumbotron">
          <Card images={this.state.imgArray} handleClick={this.handleClick} />
        </div>
        <br />
        <div className="row">
          <div className="col s3" />
          <div className="col s3">
            <h1>
              Try to get 3 "rights" before you lose!
            </h1>
          </div>
          <div className="col s3" />
        </div>
      </div>
    );
  }
}
