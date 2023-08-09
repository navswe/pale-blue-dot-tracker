/**
 * This is the entry point of the React application.
 * It renders the App component wrapped in a ContextProvider component.
 * @module index
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//from MainContext.js:
import { ContextProvider } from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ContextProvider>
      <App />
    </ContextProvider>
);
