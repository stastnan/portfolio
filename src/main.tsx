import React from "react";

import ReactDOM from "react-dom/client";
import { StyleSheetManager } from "styled-components";

import App from "./App.tsx";
import { ModalContextProvider } from "./context/modal-context.tsx";
import { ScrollProvider } from "./context/scroll-context.tsx";
import { ThemeContextProvider } from "./context/theme-context.tsx";

const shouldForwardProp = (prop: string) =>
  ![
    "variant",
    "bgcolor",
    "header",
    "isDark",
    "white",
    "withoutShadow",
    "block",
  ].includes(prop);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ScrollProvider>
        <ModalContextProvider>
          <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <App />
          </StyleSheetManager>
        </ModalContextProvider>
      </ScrollProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
);
