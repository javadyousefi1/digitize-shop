import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./font/TTF/Kalameh-Black.ttf";
import "./font/TTF/Kalameh-Bold.ttf";
import "./font/TTF/Kalameh-ExtraBold.ttf";
import "./font/TTF/Kalameh-ExtraLight.ttf";
import "./font/TTF/Kalameh-Regular.ttf";
import "./font/TTF/Kalameh-Bold.ttf";
import "./font/TTF/Kalameh-Medium.ttf";
import "./font/TTF/Kalameh-Thin.ttf";
import "./font/TTF/Kalameh-Light.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
