import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.js";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    // <ThemeProvider theme={theme}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    // </ThemeProvider>
);
