import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { blue, indigo, yellow } from "@mui/material/colors";

const root = ReactDOM.createRoot(document.getElementById("root"));
const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: indigo,
    secondary: blue,
  },
});

root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
