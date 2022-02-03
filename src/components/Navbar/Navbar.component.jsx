import React, { useEffect, useState } from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  List,
  ListItem,
  IconButton,
  Divider,
  withWidth
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import audiophileLogo from "../../assets/img/shared/desktop/logo.svg";
import cartIcon from "../../assets/img/cart/cart-icon.svg";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { useStyles } from "./navbar.styles";
import { useLocation } from "react-router-dom";
import { selectPathName } from "../../redux/path/path.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setUrlPathName } from "../../redux/path/path.actions";
import { appendModalToNav, handleCategoryDescription } from "./navbar.util";
import { compose } from "redux";
import SlideDownMenu from "../slide-down-menu/slide-down-menu.component";
import CartItem from "../cart-item/cart-item.component";
import CartItemContainer from "../cart-item/cart-item.container";
import { selectCartQuantity } from "../../redux/cart/cart.selectors";

const Navbar = ({ setUrlPathName, pathName, width, cartQuantity }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [category, setCategory] = useState("");

  const location = useLocation();
  const { pathname } = location;

  const handleCartModal = () => {
    setOpenCart(!openCart);
  };

  useEffect(() => {
    setUrlPathName(pathname);
    setCategory(handleCategoryDescription(pathname));
    window.scrollTo(0, 0);
  }, [location]);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleCartClose = () => {
    setOpenCart(false);
  };

  return (
    <div>
      <AppBar
        id="appBar"
        position="static"
        className={classes.appBar}
        color="transparent"
        style={{ zIndex: "1302" }}
      >
        <Toolbar style={{ zIndex: "1302" }} className={classes.navToolbar}>
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
            onClick={handleCartModal}
          >
            <img src={cartIcon} alt="Cart Icon" />
            {cartQuantity > 0 ? (
              <span className={classes.cartCounter}>{cartQuantity}</span>
            ) : null}
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
        <CartItemContainer
          openCart={openCart}
          handleCartClose={handleCartClose}
        />
      </AppBar>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  pathName: selectPathName,
  cartQuantity: selectCartQuantity
});

const mapDispatchToProps = (dispatch) => ({
  setUrlPathName: (path) => dispatch(setUrlPathName(path))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withWidth()
)(Navbar);
