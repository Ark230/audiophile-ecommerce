import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  galleryContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10rem 0",
    "& > img": {
      borderRadius: "8px",
      width: "57%",
      [theme.breakpoints.down("xs")]: {
        width: "revert"
      }
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  subGalleryContainer: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& > img": {
      borderRadius: "8px",
      "&:not(:last-child)": {
        marginBottom: "3rem"
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "3rem"
      }
    },
    [theme.breakpoints.down("xs")]: {
      width: "revert"
    }
  }
}));
