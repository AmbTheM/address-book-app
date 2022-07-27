import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./Redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
const ReactApp = process.env.NODE_ENV === "development" ? hot(App) : App;

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <ReactApp />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);

// if (module.hot) module.hot.accept()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalssssssss
