import { Components } from "@mui/material";
import { Theme } from "@mui/system";

const MuiOutlinedInput: Components<Theme>["MuiOutlinedInput"] = {
  styleOverrides: {
    root: {
      padding: 5,
      borderRadius: 10,
      backgroundColor: "#ffffff10",
      "&:hover": undefined,
      paddingLeft: 10,
      paddingRight: 10,
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
export default MuiOutlinedInput;
