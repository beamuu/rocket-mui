import { Components } from "@mui/material";
import { Theme } from "@mui/system";

const MuiDivider: Components<Theme>["MuiDivider"] = {
  styleOverrides: {
    root: {
      // css
      marginTop: "20px",
      marginBottom: "20px",
      backgroundColor: "#ffffff60",
    },
  },
};
export default MuiDivider;
