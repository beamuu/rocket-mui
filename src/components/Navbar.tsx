import { Button, IconButton, Stack, TextField, Typography, useTheme } from "@mui/material";
import { Box, styled } from "@mui/system";
import { FC } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import GitHubIcon from '@mui/icons-material/GitHub';

const NavbarContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "60px",
  backgroundColor: theme.palette.background.default,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "sticky",
  top: 0,
  paddingTop: "4px",
  paddingBottom: "4px",
  paddingLeft: "30px",
  paddingRight: "30px",
  border: "1px solid #ffffff20",
  borderWidth: "0 0 1px 0",
}));

const Navbar: FC = () => {
  const theme = useTheme();
  return (
    <NavbarContainer zIndex={70}>
      <Box>
        <Typography variant="h6">Prebuilt Navbar</Typography>
      </Box>
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField size="small" variant="filled" placeholder="Type something here"/>
        <IconButton
          size="small"
          sx={{
            border: `1px solid ${theme.palette.primary.light}40`,
            borderRadius: 3,
            p: 1,
          }}
        >
          <GitHubIcon sx={{ color: theme.palette.primary.light }} fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            border: `1px solid ${theme.palette.primary.light}40`,
            borderRadius: 3,
            p: 1,
          }}
        >
          <LightModeIcon sx={{ color: theme.palette.primary.light }} fontSize="small" />
        </IconButton>
      </Stack>
    </NavbarContainer>
  );
};

export default Navbar;
