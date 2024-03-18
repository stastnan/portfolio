import App from "./App.tsx";
import theme from "./ui/theme/theme";

import React from "react";

import ReactDOM from "react-dom/client";
import { StyleSheetManager, ThemeProvider } from "styled-components";

const shouldForwardProp = (prop: string) =>
  !["variant", "bgcolor"].includes(prop);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <App />
      </StyleSheetManager>
    </ThemeProvider>
  </React.StrictMode>,
);
