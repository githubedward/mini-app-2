import React, { Component } from "react";
import RegAuth from "./components/RegAuth/index";
import GlobalStyle from "./themes/GlobalStyle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <RegAuth />
      </div>
    );
  }
}

export default App;
