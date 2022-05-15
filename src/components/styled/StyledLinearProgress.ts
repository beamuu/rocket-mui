import { LinearProgress } from "@mui/material";
import { styled } from "@mui/system";

const StyledLinearProcess = styled(LinearProgress)`
  background-color: #ffffff50;
  & .MuiLinearProgress-bar {
    background-color: #ffffff;
  }
  & .MuiLinearProgress-bar1Determinate {
    background-color: #ffffff;
  }
`;

export default StyledLinearProcess;
