import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  productDetailWrapper: {
    padding: "14rem 14.5rem 0 14.5rem",
    [theme.breakpoints.only("md")]: {
      paddingLeft: "9rem",
      paddingRight: "9rem"
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "4.5rem",
      paddingRight: "4.5rem"
    }
  },
  categoryShowcasePosition: {
    margin: "20rem 0"
  }
}));
