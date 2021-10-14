import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ClientContext from "./services/ClientContext";
import reportWebVitals from "./reportWebVitals";
import { HttpPokeApiClient } from "./services/PokeApiClient";

ReactDOM.render(
  <React.StrictMode>
    <ClientContext.Provider value={{ client: new HttpPokeApiClient() }}>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
