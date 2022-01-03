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
  Typography
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

const Navbar = ({ setUrlPathName, pathName }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [category, setCategory] = useState("");

  const location = useLocation();

  useEffect(() => {
    handleCategoryDescription();
  }, [category]);

  const handleCategoryDescription = (path) => {
    // location.pathname = /category/earphones
    if (path !== undefined) {
      setUrlPathName(path);
      navigate(path);

      if (path !== "/") {
        let mySplit = path.split("/");
        let mySplit2 = mySplit[2];

        let re = new RegExp(`(category+\/${mySplit2})+(.*)`);

        let results = re.exec(path);
        if (results !== null) {
          setCategory(mySplit2);
        }
      } else {
        setCategory("");
      }
    } else {
      if (location.pathname !== "/") {
        let mySplit = location.pathname.split("/");
        let mySplit2 = mySplit[2];

        let re = new RegExp(`(category+\/${mySplit2})+(.*)`);

        let results = re.exec(location.pathname);
        if (results !== null) {
          setCategory(mySplit2);
        }
      } else {
        setCategory("");
      }
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
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
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open)}
          >
            <MenuIcon />
          </IconButton>

          <a onClick={() => handleCategoryDescription("/")}>
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
                  onClick={() => handleCategoryDescription("/")}
                >
                  HOME
                </a>
              </ListItem>
              <ListItem>
                <a
                  className={`${classes.navItem} nav-animation`}
                  // to="/category/headphones"
                  onClick={() =>
                    handleCategoryDescription("/category/headphones")
                  }
                >
                  HEADPHONES
                </a>
              </ListItem>
              <ListItem>
                <a
                  className={`${classes.navItem} nav-animation`}
                  onClick={() =>
                    handleCategoryDescription("/category/speakers")
                  }
                >
                  SPEAKERS
                </a>
              </ListItem>
              <ListItem>
                <a
                  className={`${classes.navItem} nav-animation`}
                  onClick={() =>
                    handleCategoryDescription("/category/earphones")
                  }
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
        {/* ver si la ruta incluye algo relacionado a categoria: category/speakers */}
        {pathName !== "/" ? (
          <div className={clsx({ [classes.categoryDescription]: category })}>
            <h1>{category.toUpperCase()}</h1>
          </div>
        ) : null}
      </AppBar>

      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        classes={{ paper: classes.drawerWidth }}
      >
        {menuName && (
          <ListItem button onClick={() => setMenuName(null)}>
            <ListItemText primary="Back to main menu" />
            <ChevronLeftIcon />
          </ListItem>
        )}

        {displayMenuItems()}
      </Drawer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  pathName: selectPathName
});

const mapDispatchToProps = (dispatch) => ({
  setUrlPathName: (path) => dispatch(setUrlPathName(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
