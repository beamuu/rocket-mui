import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { FC } from "react"

const NavbarContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "50px",
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
}))


const Navbar: FC = () => {
  return (
    <NavbarContainer zIndex={70}>
      <Box>
        <Typography variant="h6">Prebuilt Navbar</Typography>
      </Box>
    </NavbarContainer>
  )
}

export default Navbar;