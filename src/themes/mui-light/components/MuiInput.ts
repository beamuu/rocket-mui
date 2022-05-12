import { Components } from "@mui/material";
import { Theme } from "@mui/system";

const MuiInput: Components<Theme>["MuiInput"] = {
  styleOverrides: {
    root: {
      padding: 5,
      backgroundColor: "transparent",
    },
    input: {
      // padding not work in this field!
    },
  },
  defaultProps: {
    inputProps: {
      style: {
        padding: 5
      }
    }
  },
};
export default MuiInput;
