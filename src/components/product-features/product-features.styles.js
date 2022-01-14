import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  featuresSection: {
    display: "flex",
    [theme.breakpoints.up("lg")]: {
      justifyContent: "space-between"
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    }
  },
  featuresDetail: {
    [theme.breakpoints.up("lg")]: {
      width: "60%"
    }
  },
  featuresTitle: {
    fontSize: "2.5rem"
  },
  featuresParagraph: {
    fontSize: "1.9rem",
    textAlign: "justify",
    wordBreak: "break-all",
    opacity: "0.5",
    [theme.breakpoints.up("lg")]: {
      wordBreak: "revert"
    }
  },
  productAddons: {
    margin: "3rem 0",
    display: "flex",
    "& > h2": {
      fontSize: "2.5rem"
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-evenly"
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0",
      width: "30%",
      flexDirection: "column",
      justifyContent: "revert"
    }
  },
  productAddonsList: {
    listStyle: "none",
    padding: "0",
    "& > li > p": {
      fontSize: "1.9rem",
      opacity: "0.5",
      display: "inline"
    },
    "& > li > span": {
      fontSize: "1.9rem",
      color: "#D87D4A",
      marginRight: "1.5rem"
    },
    [theme.breakpoints.up("lg")]: {
      "& > li:not(:last-child)": {
        marginBottom: "1rem"
      }
    }
  }
}));
