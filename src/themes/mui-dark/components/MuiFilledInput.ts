import { Components } from "@mui/material";
import { Theme } from "@mui/system";

const MuiFilledInput: Components<Theme>["MuiFilledInput"] = {
  styleOverrides: {
    root: {
      padding: 5,
      borderRadius: 10,
      backgroundColor: "#ffffff10",
      "&:hover": undefined,
      paddingLeft: 10,
      paddingRight: 10,
    },
    underline: {},
  },
  defaultProps: {
    inputProps: {
      style: {
        padding: 5,
      },
    },
    disableUnderline: true,
  },
};
export default MuiFilledInput;
