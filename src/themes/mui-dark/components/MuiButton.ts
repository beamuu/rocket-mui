import { Components } from "@mui/material";
import { Theme } from "@mui/system";

const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      // css
      borderRadius: 40,
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
