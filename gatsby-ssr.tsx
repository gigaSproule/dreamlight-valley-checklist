import { GatsbySSR } from "gatsby";
import React from "react";
import ThemeProvider from "./src/themeProvider";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = (args) => {
  return <ThemeProvider>{args.element}</ThemeProvider>;
};
