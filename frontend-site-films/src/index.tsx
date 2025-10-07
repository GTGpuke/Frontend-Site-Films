import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Point d'entrée de l'application React.
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export {};
