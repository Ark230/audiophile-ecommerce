import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  productCrossSellSection: {
    margin: "5rem 0",
    "& > h2": {
      fontSize: "3rem",
      textAlign: "center",
      letterSpacing: ".4rem"
    }
  },
  productCrossSellContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  productCrossSellItem: {
    width: "30%",
    overflow: "hidden",
    "& > img": {
      width: "100%",
      borderRadius: "8px",
      margin: "2rem 0"
    },
    "& > h3": {
      textAlign: "center",
      fontSize: "2.4rem",
      letterSpacing: ".25rem",
      [theme.breakpoints.between("sm", "md")]: {
        fontSize: "2rem"
      }
    },
    "& > button": {
      display: "block",
      margin: "3rem auto"
    },
    [theme.breakpoints.down("xs")]: {
      width: "revert"
    }
  }
}));
