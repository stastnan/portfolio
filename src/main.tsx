import App from "./App.tsx";
import { GlobalStyles } from "./ui/Global.ts";
import theme from "./ui/theme/theme";

import React from "react";

import ReactDOM from "react-dom/client";
import { StyleSheetManager, ThemeProvider } from "styled-components";

const shouldForwardProp = (prop: string) =>
  !["variant", "bgcolor"].includes(prop);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <App />
      </StyleSheetManager>
    </ThemeProvider>
  </React.StrictMode>,
);
