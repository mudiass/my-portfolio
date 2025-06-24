import {createTheme, responsiveFontSizes} from "@mui/material"

let theme = createTheme({
  palette: {
    primary: {
      main: '#07a0c3',
    },
    secondary: {
      main: '#f0c808',
    },
  },
  typography: {
    fontFamily: "Quicksand"
  }
});

theme = responsiveFontSizes(theme);
export default theme