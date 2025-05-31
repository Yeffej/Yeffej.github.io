import { useState } from "react";
import {
  Box,
  Link,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { navLinks } from "../constants";
import ThemeSwitcher from "../components/ThemeSwitcher";

const NavItems = () => (
  <List
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      bgcolor: { xs: "background.paper", sm: "initial" },
    }}
  >
    {navLinks.map((item) => (
      <ListItem key={item.id} disablePadding>
        <ListItemButton href={item.href} sx={{ textAlign: "center" }}>
          <ListItemText
            primary={item.name}
            slotProps={{ primary: {
              sx: {
                color: "text.primary",
                fontSize: { md: "1.2em" },
              }
            }}}
          />
        </ListItemButton>
      </ListItem>
    ))}
    <ListItem sx={{ display: { xs: "none", sm: "block" } }} >
      <ThemeSwitcher />
    </ListItem>
  </List>
);

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => setShowNav((prev) => !prev);

  return (
    <Box component={"header"} sx={{ m: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link
          href="/"
          variant="body1"
          color="inherit"
          underline="none"
        >
          <Box
            component="img"
            src="/assets/yeff-dev.svg"
            alt="Page Logo"
            sx={{ width: { xs: 50, sm: 60, md: 70 } }}
          />
        </Link>
        <Box sx={{ ml: "auto", display: { xs: "initial", sm: "none" } }}>
          <ThemeSwitcher isSmall={true} />
        </Box>
        <Button
          onClick={handleShowNav}
          sx={{ visibility: { xs: "visible", sm: "hidden" } }}
        >
          {showNav ? <ClearIcon /> : <MenuIcon />}
        </Button>
        <Box component={"nav"} sx={{ ml: { sm: "auto" }, display: { xs: "none", sm: "initial" } }}>
          <NavItems />
        </Box>
      </Box>
      <Collapse in={showNav}>
        <Box
          component={"nav"}
          sx={{
            display: { xs: "block", sm: "none" },
            overflow: "hidden",
          }}
        >
          <NavItems />
        </Box>
      </Collapse>
    </Box>
  );
};

export default NavBar;
