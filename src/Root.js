import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store/store";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
  }
}
