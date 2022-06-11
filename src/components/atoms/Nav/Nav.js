import { AppBar, IconButton, Toolbar } from "@mui/material";

function Nav() {
  const menuItems = [
    { menu: "Zlecenia", path: "" },
    { menu: "Statystyki", path: "" },
    { menu: "informacje", path: "" },
  ];

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        {/* {menuItems.map(itemMenu => <NavLinkMenu key={itemMenu.menu} to={itemMenu.path}>{itemMenu.menu}</NavLinkMenu>)}
         */}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
