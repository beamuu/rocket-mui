import { createTheme } from "@mui/material";
import MuiButton from "./components/MuiButton";
import MuiDivider from "./components/MuiDivider";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#171b29",
    },
    text: {
      primary: "#fff",
    },
  },

  typography: {
    fontFamily: "'Inter', sans-serif !important",
    htmlFontSize: 16,
    h1: {
      color: "white",
    },
    h2: {
      color: "white",
    },
    h3: {
      color: "white",
    },
    h4: {
      color: "white",
    },
    h5: {
      color: "white",
    },
    h6: {
      color: "white",
    },
    body1: {
      color: "white",
    },
  },

  components: {
    MuiButton,
    MuiDivider,
  }
});

export default theme;
