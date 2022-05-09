import { Components } from "@mui/material";
import { Theme } from "@mui/system";

const MuiInputBase: Components<Theme>["MuiInputBase"] = {
  styleOverrides: {
    root: {
      padding: 5,
      backgroundColor: "initial",
      "&:hover": undefined
    },
    input: {
      // padding not work in this field!
      fontWeight: 500,
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
export default MuiInputBase;
