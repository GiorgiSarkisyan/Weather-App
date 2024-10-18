import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CityProvider } from "./context/CityContext.jsx";
import { LoaderProvider } from "./context/LoaderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CityProvider>
      <LoaderProvider>
        <App />
      </LoaderProvider>
    </CityProvider>
  </React.StrictMode>
);
