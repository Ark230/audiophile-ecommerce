import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingTop: "22rem",
    paddingLeft: "0rem",
    [theme.breakpoints.down("md")]: {
      paddingTop: "35rem",
      paddingLeft: "2.5rem",
      paddingRight: "2.5rem"
    }
  },
  descriptionContainerPosition: {
    marginLeft: "13rem",
    alignSelf: "center",
    "& > [class*=descriptionContainer]": {
      color: "black",
      "& > [class*=newProduct]": {
        color: "#D87D4A",
        opacity: "revert"
      },
      "& > [class*=productTitle]": {
        fontSize: "4rem",
        width: "37.5rem"
      },
      "& > [class*=descriptionText]": {
        opacity: "0.5",
        width: "42.9rem",
        [theme.breakpoints.down("xs")]: {
          width: "fit-content"
        }
      },
      "& > .descriptionButton": {},
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
        marginBottom: "5rem",

        "& > [class*=productTitle]": {
          margin: "0 auto"
        },
        "& > .descriptionButton": {
          margin: "1rem auto"
        }
      }
    },
    [theme.breakpoints.down("md")]: {
      margin: "5rem 0 5rem 0"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "5rem 0 3rem 0"
    }
  },

  productContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "0 0 15rem 2rem",
    "& > img": { width: "52rem", height: "53rem", borderRadius: "8px" },
    "&:nth-child(2n)": {
      flexDirection: "row-reverse",
      "& > [class*=descriptionContainerPosition]": {
        marginLeft: "0",
        marginRight: "13rem"
      },
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        paddingLeft: "3rem",
        "& > [class*=descriptionContainerPosition]": {
          marginLeft: "0rem",
          marginRight: "0"
        }
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "revert"
      }
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      paddingRight: "0",
      "& > img": {
        width: "-webkit-fill-available",
        height: "40rem",
        alignSelf: "center",
        paddingRight: "5rem",
        paddingLeft: "5rem"
      }
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 0 0 2rem",
      "& > img": {
        height: "100%",
        width: "100%"
      }
    },
    [theme.breakpoints.down("xs")]: {
      "& > img": {
        paddingRight: "0",
        paddingLeft: "0"
      }
    }
  },
  categoryShowcasePosition: {
    marginBottom: "10rem",
    padding: "0rem 14rem",
    marginTop: "25rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0rem",
      marginTop: "12rem"
    }
  }
}));
