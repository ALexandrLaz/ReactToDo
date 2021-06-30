import React from "react";
import Authorize from "./auth/login";
import TodosPage from "@pages/todos/index.js";

export default function HomePage(props) {
  console.log(props);
  return fetch("https://data.testxhr.com/api/todos?page=1", {
    method: "GET",
    headers: {
      apptoken: localStorage.getItem("apptoken"),
    },
  }).then((data) => {
    console.log(localStorage.getItem("apptoken"), 123123);
    data.ok ? <TodosPage /> : <Authorize />;
  });
}
