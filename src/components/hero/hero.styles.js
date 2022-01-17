import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  containerHeroPosition: {
    "& > [class*=descriptionContainer]": {
      "& > [class*=productTitle]": {
        [theme.breakpoints.up("md")]: {
          width: "50%"
        }
      },
      "& > .descriptionButton": {
        [theme.breakpoints.down("sm")]: {
          margin: "2rem auto"
        }
      }
    },
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "22rem",
      left: "9%"
    },
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      margin: "0",
      textAlign: "center",
      left: "50%",
      top: "50%",
      transform: "translate(-48%, -50%)"
    },
    [theme.breakpoints.only("xs")]: {
      width: "32rem",
      height: "29rem",
      transform: "translate(-49%, -40%)"
    }
  }
}));
