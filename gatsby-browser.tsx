import { GatsbyBrowser } from "gatsby";
import React from "react";
import ThemeProvider from "./src/themeProvider";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = (args) => {
  return <ThemeProvider>{args.element}</ThemeProvider>;
};
