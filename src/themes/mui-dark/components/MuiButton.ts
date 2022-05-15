import { Components } from "@mui/material";
import { Theme } from "@mui/system";

const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    sizeSmall: {
      borderRadius: 6,
      height: "32px",
      fontWeight: 500,
      fontSize: "0.8rem",
    },
    sizeMedium: {
      borderRadius: 8,
      height: "38px",
      fontWeight: 600,
      fontSize: "0.9rem",
    },
    sizeLarge: {
      borderRadius: 10,
      height: "48px",
      fontWeight: 600,
      fontSize: "1rem",
    },
    root: {
      // css
      
      textTransform: "none",
      height: "48px",
      fontWeight: 600,
      fontSize: "1rem",
    },
    outlined: {
      borderWidth: "2px",
      "&:hover": {
        borderWidth: "2px",
      }
    },
  },
};

export default MuiButton;
