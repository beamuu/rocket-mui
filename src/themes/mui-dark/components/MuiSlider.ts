import { Components } from "@mui/material";
import { Theme } from "@mui/system";

const MuiSlider: Components<Theme>["MuiSlider"] = {
  styleOverrides: {
    root: {
      marginTop: 3,
      marginBottom: 3,
      boxShadow: "none",
    },
    thumb: {
      "&:hover": {
        boxShadow: "none",
      },
      "&:active": {
        boxShadow: "none",
      },
      "&:focus": {
        boxShadow: "none",
      },
      boxShadow: "none",
    },
    focusVisible: {
      boxShadow: "none",
    },
  },
};
export default MuiSlider;
