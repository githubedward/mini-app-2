import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

class Root extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
