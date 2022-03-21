import * as React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// Helper
import { img, pages } from "./Navbar.helper";
// Styles
import { anchorOrigin, BoxStyle, BoxStyleTwo } from "./Navbar.styles";
import { ButtonStyle, Styles, sx } from "./Navbar.styles";
import { sxTwo, transformOrigin, TypographyStyle } from "./Navbar.styles";
import { Link } from "gatsby";
import { LinkedCameraRounded } from "@mui/icons-material";

function Navbar() {
  const [anchorEl, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Styles>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={TypographyStyle}
              >
                <img src={img.url} alt={img.alt} className="image" />
              </Typography>
            </Link>

            <Box sx={BoxStyle}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={anchorOrigin}
                keepMounted
                transformOrigin={transformOrigin}
                open={Boolean(anchorEl)}
                onClose={handleCloseNavMenu}
                sx={sx}
              >
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Link to={page.url} className="link">
                      <Typography textAlign="center">{page.name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography variant="h6" noWrap component="div" sx={sxTwo}>
              <Link to="/" className="link">
                <img src={img.url} alt={img.alt} className="image" />
              </Link>
            </Typography>

            {/* Navbar desktop */}
            <Box sx={BoxStyleTwo}>
              {pages.map((page) => (
                <Button
                  key={page.id}
                  onMouseEnter={handleCloseNavMenu}
                  sx={ButtonStyle}
                >
                  <Link to={page.url} className="link">
                    {page.name}
                  </Link>
                </Button>
              ))}
            </Box>

            {/*  <Box sx={{ flexGrow: 0 }}>
              <Button variant="outlined">
                <Link to="/products" className="link">
                  Pokedex
                </Link>
              </Button>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </Styles>
  );
}
export default Navbar;
