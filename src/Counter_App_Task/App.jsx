import React, { Component } from "react";
import "./style.css"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handelInc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handelDec = () => {
    if (this.state.count >= 1) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  handelReset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div className="container">
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.handelInc}>Increment</button>
        <button onClick={this.handelDec}>Decrement</button>
        <button onClick={this.handelReset}>Reset</button>
      </div>
    );
  }
}
