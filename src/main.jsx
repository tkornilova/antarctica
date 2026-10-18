import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/normalize.scss";
import "./styles/variables.scss";
import "./styles/fonts.scss";
import "./styles/global.scss";
import "./index.scss";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
