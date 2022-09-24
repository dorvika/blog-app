import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e28743",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: ["Abel", "Roboto", "Mulish", "sans-serif"].join(","),
    fontSize: 16,
    fontWeightExtraLight: 200,
    fontWeightMedium: 600,
    h2: {
      fontFamily: ["Abel", "san-serif"].join(","),
      fontSize: 32,
      lineHeight: "38px",
      color: "#373F41",
      letterSpacing: "3px",
    },
    h3: {
      fontFamily: ["Abel", "san-serif"].join(","),
      fontSize: 18,
      fontWeight: 400,
      lineHeight: "25px",
    },
    body: {
      fontFamily: ["Abel", "san-serif"].join(","),
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "25px",
      color: "#373F41",
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          fontFamily: ["Abel", "san-serif"].join(","),
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "22px",
          borderRadius: 4,
          paddingBottom: 15,
          paddingLeft: 40,
          paddingRight: 40,
          paddingTop: 15,
          color: "#FFFFFF",
          backgroundColor: "#e28743",
          border: "1px solid transparent",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#e28743",
            border: "1px solid #e28743",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
