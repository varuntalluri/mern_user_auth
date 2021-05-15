import React from "react";
import ReactDom from "react-dom";
import User from "./components/User";

ReactDom.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>,
  document.getElementById("root")
);
