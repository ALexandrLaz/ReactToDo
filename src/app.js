import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "@pages/app.js";
// https://reactrouter.com/
if (document.getElementById("app") != null) {
  render(<App />, document.getElementById("app"));
}
// window.onbeforeunload = function () {
//   console.log("unload");
//   localStorage.removeItem("apptoken");
// };
