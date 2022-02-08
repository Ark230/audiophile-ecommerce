import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "22rem 14.5rem 0 14.5rem",
    [theme.breakpoints.down("md")]: {
      padding: "35rem 9rem 0 9rem"
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "4.5rem",
      paddingRight: "4.5rem"
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
        width: "37.5rem",
        [theme.breakpoints.down("md")]: {
          margin: "0 auto"
        },
        [theme.breakpoints.down("xs")]: {
          margin: "2rem auto"
        }
      },
      "& > [class*=descriptionText]": {
        opacity: "0.5",
        width: "42.9rem",
        [theme.breakpoints.down("xs")]: {
          width: "80%"
        }
      },
      "& > .descriptionButton": {
        [theme.breakpoints.down("md")]: {
          margin: "1rem auto"
        }
      },
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
        marginBottom: "5rem"
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
    margin: "0 0 12rem 0",
    "& > img": {
      width: "52rem",
      height: "53rem",
      borderRadius: "8px",
      [theme.breakpoints.down("md")]: {
        width: "-webkit-fill-available",
        height: "40rem",
        alignSelf: "center"
      },
      [theme.breakpoints.down("sm")]: {
        height: "100%",
        width: "100%"
      }
    },
    "&:nth-child(2n)": {
      flexDirection: "row-reverse",
      "& > [class*=descriptionContainerPosition]": {
        marginLeft: "0",
        marginRight: "13rem",
        [theme.breakpoints.down("md")]: {
          marginLeft: "0",
          marginRight: "0"
        }
      },
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        paddingLeft: "3rem"
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "revert"
      }
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      paddingRight: "0",
      margin: "0 0 5rem 0"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0"
    }
  },
  categoryShowcasePosition: {
    marginBottom: "12rem",
    marginTop: "25rem",
    [theme.breakpoints.only("md")]: {
      marginTop: "15rem"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0",
      marginTop: "15rem"
    }
  }
}));
