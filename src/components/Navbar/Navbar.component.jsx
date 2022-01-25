import React, { useEffect, useState } from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  List,
  ListItem,
  IconButton,
  Drawer,
  Divider,
  ListItemText,
  Typography,
  withWidth
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import audiophileLogo from "../../assets/img/shared/desktop/logo.svg";
import cartIcon from "../../assets/img/cart/cart-icon.svg";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import { useStyles } from "./navbar.styles";
import { useLocation } from "react-router-dom";
import { selectPathName } from "../../redux/path/path.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setUrlPathName } from "../../redux/path/path.actions";
import { handleCategoryDescription } from "./navbar.util";
import { compose } from "redux";
import SlideDownMenu from "../slide-down-menu/slide-down-menu.component";

const Navbar = ({ setUrlPathName, pathName, width }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setUrlPathName(pathname);
    setCategory(handleCategoryDescription(pathname));
    window.scrollTo(0, 0);
    setOpen(false);
  }, [location]);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const [menuName, setMenuName] = useState(null);

  const mainMenuListArr = ["Headphones", "Earphones", "Speakers"];

  const subMenuObj = {
    headphones: [
      { name: "XX99 Mark II Headphones" },
      { name: "XX99 Mark I Headphones" },
      { name: "XX59 Headphones" }
    ],
    speakers: [{ name: "ZX9 Speaker" }, { name: "ZX7 Speaker" }],
    earphones: [{ name: "YX1 Wireless Earphones" }]
  };

  const hasSubMenu = (item) => (subMenuObj[item] ? true : false);

  const displayMenuItems = () => {
    let menuItemList = menuName ? subMenuObj[menuName] : mainMenuListArr;

    if (menuName) {
      menuItemList = menuItemList.map((item) => {
        if (typeof item === "object") {
          return item.name;
        }
      });
    }

    const clickListener = (text) => {
      if (!menuName) {
        return setMenuName(text.toLowerCase());
      }
    };

    return (
      <div className={classes.list} role="presentation">
        {!menuName && (
          <Typography variant="h6" align="center">
            Categories
          </Typography>
        )}
        <Divider />
        <List>
          {menuItemList.map((text, index) => (
            <ListItem button key={index} onClick={() => clickListener(text)}>
              <ListItemText primary={text} />
              {hasSubMenu(text.toLowerCase()) && <ChevronRightIcon />}
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  return (
    <div>
      <AppBar
        id="test"
        position="static"
        className={classes.appBar}
        color="transparent"
      >
        <Toolbar className={classes.navToolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            className={clsx(classes.menuButton, open)}
          >
            <MenuIcon />
          </IconButton>

          <a onClick={() => navigate("/")}>
            <img
              className={classes.businessLogo}
              src={audiophileLogo}
              alt="Audiophile Logo"
            />
          </a>
          <Grid
            className={classes.navContainer}
            container
            spacing={1}
            xs={6}
            justify="space-around"
          >
            <List className={`${classes.nav} nav-underline`}>
              <ListItem>
                <a
                  className={`${classes.navItem} nav-animation`}
                  onClick={() => navigate("/")}
                >
                  HOME
                </a>
              </ListItem>
              <ListItem>
                <a
                  className={`${classes.navItem} nav-animation`}
                  onClick={() => navigate("/category/headphones")}
                >
                  HEADPHONES
                </a>
              </ListItem>
              <ListItem>
                <a
                  className={`${classes.navItem} nav-animation`}
                  onClick={() => navigate("/category/speakers")}
                >
                  SPEAKERS
                </a>
              </ListItem>
              <ListItem>
                <a
                  className={`${classes.navItem} nav-animation`}
                  onClick={() => navigate("/category/earphones")}
                >
                  EARPHONES
                </a>
              </ListItem>
            </List>
          </Grid>

          <IconButton
            color="inherit"
            aria-label="menu"
            className={classes.cartIcon}
          >
            <img src={cartIcon} alt="Cart Icon" />
          </IconButton>
        </Toolbar>
        <div>
          <Divider
            className={`${classes.navDivider} nav-divider`}
            light={true}
          />
        </div>
        {pathName !== "/" && !open ? (
          <div className={clsx({ [classes.categoryDescription]: category })}>
            <h1>{category ? category.toUpperCase() : ""}</h1>
          </div>
        ) : null}

        {width === "sm" || width === "xs" ? (
          <SlideDownMenu open={open} />
        ) : null}
      </AppBar>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  pathName: selectPathName
});

const mapDispatchToProps = (dispatch) => ({
  setUrlPathName: (path) => dispatch(setUrlPathName(path))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withWidth()
)(Navbar);
