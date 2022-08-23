import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./styles/index.css";
import App from "./App";
import { store } from "./utils/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
