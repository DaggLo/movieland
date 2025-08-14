import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./app/App";

import "./styles/index.scss";

const container = document.querySelector('#root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);