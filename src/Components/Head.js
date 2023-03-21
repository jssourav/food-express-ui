import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import useRestaurant from "../utils/useRestaurant";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setRedirectUrl, setLoggedIn } from "../store/authSlice";
const drawerWidth = 240;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Head(props) {
  const prevRoute = useLocation();
  const isLoggedIn = useSelector((store) => store.auth.isAuth);
  const dispatch = useDispatch();

  const navItems = [
    {
      name: "Offers",
      link: "#",
    },
    {
      name: "Help",
      link: "#",
    },

    {
      name: "Cart",
      link: "/cart",
    },
    {
      name: isLoggedIn ? "My Profile" : "Sign In",
      link: isLoggedIn ? "/my-profile" : "/signin",
    },
  ];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "#282c3f" }}
    >
      <Typography variant="h6" sx={{ my: 2 }} component={RouterLink} to="/">
        <img
          src="https://www.foodexpressonline.com/assets/user/img/logo2.png"
          alt="logo"
          width={200}
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem
            disablePadding
            key={index}
            to={item.link}
            component={RouterLink}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} sx={{ color: "#282c3f" }} />
            </ListItemButton>
          </ListItem>
        ))}
        {isLoggedIn && (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={"Logout"}
                sx={{ color: "#282c3f" }}
                onClick={() => dispatch(setLoggedIn(false))}
              />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  // eslint-disable-next-line no-unused-vars
  const [searchText, restaurant, setRestaurant] = useRestaurant();

  React.useEffect(() => {
    dispatch(setRedirectUrl(prevRoute.pathname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevRoute.pathname]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#282c3f" }} />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", color: "#282c3f" },
            }}
            component={RouterLink}
            to="/"
          >
            <img
              src="https://www.foodexpressonline.com/assets/user/img/logo2.png"
              alt="logo"
              width={200}
            />
          </Typography>
          <Search sx={{ backgroundColor: "white" }}>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#282c3f" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ color: "#282c3f" }}
              value={searchText}
              onChange={(e) => setRestaurant(e.target.value)}
            />
          </Search>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Button
                to={item.link}
                key={index}
                component={RouterLink}
                sx={{
                  color: "#282c3f",
                  padding: 4,
                  "&:hover": {
                    color: "#f77419",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
            {isLoggedIn && (
              <Button
                sx={{
                  color: "#282c3f",
                  padding: 4,
                  "&:hover": {
                    color: "#f77419",
                  },
                }}
                onClick={() => dispatch(setLoggedIn(false))}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Head.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Head;
