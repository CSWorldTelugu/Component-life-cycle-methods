import React, { Component } from "react";
import Child from "./child";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 10,
      show: true,
    };
  }

  render() {
    return (
      <>
        <h1>Parent component</h1>
        {this.state.show && <Child data={+this.state.x} />}

        <button
          onClick={() => {
            this.setState({ show: false });
          }}
        >
          hide
        </button>
        <button
          onClick={() => {
            this.setState({ show: true });
          }}
        >
          show
        </button>

        <button
          onClick={() => {
            this.setState({ x: this.state.x + 10 });
          }}
        >
          click
        </button>
      </>
    );
  }
}

export default App;
