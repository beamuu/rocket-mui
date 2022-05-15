import { createTheme } from "@mui/material";
import MuiCard from "./components/MuiCard";
import MuiButton from "./components/MuiButton";
import MuiDivider from "./components/MuiDivider";
import MuiFilledInput from "./components/MuiFilledInput";
import MuiInput from "./components/MuiInput";
import MuiInputBase from "./components/MuiInputBase";
import MuiOutlinedInput from "./components/MuiOutlinedInput";
import MuiTextField from "./components/MuiTextField";
import MuiSlider from "./components/MuiSlider";

const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0c0f1c",
    },
    primary: {
      main: "#204de3",
      light: "#70b3ff",
      dark: "#0028ad",
      contrastText: "#fff",
    },
    secondary: {
      main: "#e0164c",
      light: "#e64e76",
      dark: "#b00533",
      contrastText: "#fff",
    },
    warning: {
      main: "#ffa600",
      light: "#ffc457",
      dark: "#b07200",
      contrastText: "#fff",
    },
    error: {
      main: "#ff2200",
      light: "#ff745e",
      dark: "#b51800",
      contrastText: "#fff",
    },
    info: {
      main: "#178ee3",
      light: "#58b8fc",
      dark: "#006bb8",
      contrastText: "#fff",
    },
    success: {
      main: "#0cc747",
      light: "#63ff95",
      dark: "#008c2c",
      contrastText: "#fff",
    },
    text: {
      primary: "#fff",
    },
  },

  typography: {
    fontFamily: "'Inter', sans-serif !important",
    htmlFontSize: 16,
    fontWeightRegular: 400,
    h1: {
      color: "white",
      fontWeight: 600,
    },
    h2: {
      color: "white",
      fontWeight: 600,
    },
    h3: {
      color: "white",
      fontWeight: 600,
    },
    h4: {
      color: "white",
      fontWeight: 600,
    },
    h5: {
      color: "white",
      fontWeight: 600,
    },
    h6: {
      color: "white",
      fontWeight: 600,
    },
    body1: {
      color: "white",
      fontSize: "18px",
    },
    body2: {
      color: "white",
      fontSize: "18px",
      opacity: 0.7,
    },
  },

  components: {
    MuiButton,
    MuiDivider,
    MuiInputBase,
    MuiTextField,
    MuiInput,
    MuiFilledInput,
    MuiOutlinedInput,
    MuiCard,
    MuiSlider,
  },
});

export default DarkTheme;
