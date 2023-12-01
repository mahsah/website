import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter root={root}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
