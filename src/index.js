import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
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
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
