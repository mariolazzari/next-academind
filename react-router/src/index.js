import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./store/favoritesContext";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <FavoritesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesProvider>,
  document.getElementById("root")
);
