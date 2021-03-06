import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/modern-normalize/modern-normalize.css";
import { App } from "./components/App";
import { ThemeProvider } from "styled-components";
import { theme } from "constants/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
