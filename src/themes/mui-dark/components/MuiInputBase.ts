import { Components } from "@mui/material";
import { Theme } from "@mui/system";

const MuiInputBase: Components<Theme>["MuiInputBase"] = {
  styleOverrides: {
    root: {
      padding: 5,
      backgroundColor: "initial",
      "&:hover": undefined,
    },
    sizeSmall: {
      fontWeight: 500,
      height: "32px",
      fontSize: "0.9rem",
    },
    input: {
      // padding not work in this field!
      fontWeight: 500,
      height: "32px",
    },
  },
  defaultProps: {
    inputProps: {
      style: {
        padding: 5,
      },
    },
  },
};
export default MuiInputBase;
