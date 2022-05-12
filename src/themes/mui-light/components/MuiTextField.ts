import { Components } from "@mui/material";
import { Theme } from "@mui/system";

const MuiTextField: Components<Theme>["MuiTextField"] = {
  styleOverrides: {
    root: {
      padding: 0,
    },
    
  },
  defaultProps: {
    variant: "filled"
  },
};
export default MuiTextField;
