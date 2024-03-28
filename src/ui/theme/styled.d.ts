// For working with this UI library and TS together, it's necessary to extend DefaultTheme
import "styled-components";

import type { Theme } from "./themeTypes";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
