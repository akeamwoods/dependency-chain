import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import store from "./app/store";
import { Provider } from "react-redux";
import { MainHandler } from "./handlers/MainHandler/index";
export const App = () => {
  return (
    <div className="App">
      <MainHandler />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
