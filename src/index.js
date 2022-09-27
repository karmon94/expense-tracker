import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ExpensesState from "./context/ExpensesState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ExpensesState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ExpensesState>
);
