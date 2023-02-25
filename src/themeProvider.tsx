import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "purple",
        },
      },
    },
  },
});

const ThemeProvider = (props: { children: React.ReactNode }) => {
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};

export default ThemeProvider;
