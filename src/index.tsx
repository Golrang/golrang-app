import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "app/App";
import "styles/index.css";
import "antd/dist/antd.css";
import "golrang-design-system/dist/design.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
