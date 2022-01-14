import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  descriptionContainerPosition: {
    marginLeft: "13rem",
    alignSelf: "center",
    width: "51%",
    "& > [class*=descriptionContainer]": {
      color: "black",
      "& > [class*=newProduct]": {
        color: "#D87D4A",
        opacity: "revert",
        [theme.breakpoints.down("xs")]: {
          width: "max-content"
        }
      },
      "& > [class*=productTitle]": {
        fontSize: "4rem",
        width: "37.5rem",
        [theme.breakpoints.down("md")]: {
          fontSize: "3.5rem",
          lineHeight: "revert",
          width: "min-content"
        },
        [theme.breakpoints.down("xs")]: {
          width: "fit-content"
        }
      },
      "& > [class*=descriptionText]": {
        opacity: "0.5",
        width: "42.9rem",
        [theme.breakpoints.between("sm", "md")]: {
          textAlign: "justify",
          margin: "1rem 0",
          width: "100%"
        },
        [theme.breakpoints.down("xs")]: {
          width: "100%"
        }
      },
      "& > .descriptionButton": {},
      [theme.breakpoints.down("md")]: {
        marginBottom: "5rem",

        "& > [class*=productTitle]": {},
        "& > .descriptionButton": {
          margin: "1rem auto"
        }
      }
    },
    [theme.breakpoints.down("md")]: {
      margin: "5rem 0 5rem 0",
      justifyContent: "space-evenly"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "5rem 0 3rem 5rem"
    },
    [theme.breakpoints.down("xs")]: {
      margin: "5rem 0 0 0",
      alignSelf: "revert",
      width: "100%"
    }
  },
  productContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "0 0 15rem 0rem",
    "& > img": { width: "52rem", height: "53rem", borderRadius: "8px" },
    // "&:nth-child(2n)": {
    //   flexDirection: "row-reverse",
    //   "& > [class*=descriptionContainerPosition]": {
    //     marginLeft: "0",
    //     marginRight: "13rem"
    //   },
    //   [theme.breakpoints.down("md")]: {
    //     flexDirection: "column",
    //     paddingLeft: "3rem",
    //     "& > [class*=descriptionContainerPosition]": {
    //       marginLeft: "0rem",
    //       marginRight: "0"
    //     }
    //   },
    //   [theme.breakpoints.down("sm")]: {
    //     paddingLeft: "revert"
    //   }
    // },
    [theme.breakpoints.between("sm", "md")]: {
      paddingRight: "0",
      justifyContent: "space-around",
      "& > img": {
        width: "-webkit-fill-available",
        height: "40rem",
        alignSelf: "center",
        paddingRight: "5rem",
        paddingLeft: "5rem"
      }
    },
    [theme.breakpoints.between("sm", "md")]: {
      //   margin: "0 0 0 2rem",
      justifyContent: "space-between",
      width: "100%",
      "& > img": {
        height: "55rem",
        width: "40%",
        padding: "0"
      }
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      "& > img": {
        width: "revert",
        height: "40rem"
      }
    }
    // [theme.breakpoints.down("sm")]: {
    //   margin: "0 0 0 2rem",
    //   "& > img": {
    //     height: "100%",
    //     width: "100%"
    //   }
    // }
  }
}));
