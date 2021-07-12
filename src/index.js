import React from "react"
import ReactDOM from "react-dom"

// css
import "./index.css";

// component
import App from "./App";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals();