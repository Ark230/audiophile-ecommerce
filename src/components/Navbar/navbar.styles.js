import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex"
  },
  navContainer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  nav: {
    display: "flex"
  },
  appBar: {
    padding: "1rem 2.5rem",
    boxShadow: "none",
    backgroundColor: "#191919",
    position: "fixed",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 2.5rem"
    }
  },
  businessLogo: {
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      top: "30%",
      left: "7.2%"
    },
    [theme.breakpoints.down("xs")]: {
      position: "revert"
    }
  },
  navToolbar: {
    justifyContent: "space-around",
    [theme.breakpoints.up("lg")]: {
      padding: "0 12rem 0 12rem"
    },
<<<<<<< HEAD
=======
    [theme.breakpoints.only("md")]: {
      padding: "0 9rem"
    },
>>>>>>> main
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between"
    },
    [theme.breakpoints.only("xs")]: {
      paddingRight: "0"
    }
  },
  navItem: {
    fontFamily: "Manrope",
    fontSize: "1.3rem",
    textDecoration: "none",
    fontWeight: "bold",
    lineHeight: "1rem",
    letterSpacing: ".3rem",
    color: "#ffff",
    cursor: "pointer",
    "&:hover": {
      color: "#D87D4A"
    }
  },
  cartCounter: {
    position: "absolute",
    color: "white",
    background: "#D87D4A",
    borderRadius: "50%",
    padding: "2.5px 5px",
    top: "0",
    right: "0",
    [theme.breakpoints.down("xs")]: {
      top: "-11px",
      right: "-10px"
    }
  },
  navDivider: {
    background: "#ffffff",
    opacity: "0.2",
    [theme.breakpoints.up("md")]: {
      marginLeft: "7.5%",
      marginRight: "8.3%"
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "1.1%",
      marginRight: "4.6%"
    },
    [theme.breakpoints.down("md")]: { opacity: "0.1" }
  },
  menuButton: {
    transform: "scale(1.9)",
    padding: "0",
    marginRight: theme.spacing(2),
    color: "#ffffff",
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    [theme.breakpoints.between("xs", "sm")]: {
      display: "block"
    }
  },
  cartIcon: {
    [theme.breakpoints.only("xs")]: {
      padding: "0"
    }
  },
  hide: {
    display: "block"
  },
  drawer: {
    width: "240",
    flexShrink: 0
  },
  drawerPaper: {
    width: "240"
  },
  list: {
    width: "250"
  },
  categoryDescription: {
    color: "white",
    textAlign: "center",
    marginTop: "1rem",
    fontSize: "1.25rem",
    lineHeight: "4.4rem",
    letterSpacing: "1.5px",
    "& >h1": {
      [theme.breakpoints.up("md")]: {
        margin: "2rem 0"
      }
    },
    [theme.breakpoints.down("md")]: {
      margin: "4rem 0"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.85rem"
    }
  }
}));
