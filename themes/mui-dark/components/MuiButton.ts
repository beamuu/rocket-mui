import { PropsOf } from "@emotion/react";
import { Components } from "@mui/material";
import { Theme } from "@mui/system";

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      // css
      borderRadius: 13,
      textTransform: "none",
      height: "48px",
    },
  },
};

export default MuiButton;
