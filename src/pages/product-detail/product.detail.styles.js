import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  productDetailWrapper: {
    paddingTop: "22rem",
    paddingLeft: "14.5rem",
    paddingRight: "14.5rem",
    [theme.breakpoints.only("md")]: {
      paddingLeft: "9rem",
      paddingRight: "9rem"
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2.5rem",
      paddingRight: "2.5rem"
    }
  }
}));
