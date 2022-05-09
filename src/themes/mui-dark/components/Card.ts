import { Components } from "@mui/material";
import { Theme } from "@mui/system";

const MuiCard: Components<Theme>["MuiCard"] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    root: {
      // css
      borderRadius: 18,
      backgroundColor: "#ffffff2e",
    },
  },
};

export default MuiCard;
